import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');
const pagesDirectory = path.join(process.cwd(), 'src/content/pages');

export interface PostMeta {
  title: string;
  publishDate: string;
  slug: string;
  tags?: string[];
  featuredImage?: string | null;
  excerpt?: string;
}

export interface Post extends PostMeta {
  content: string;
  rawContent?: string;
}

/**
 * 根据日期生成slug
 * 格式: YYYYMMDDHHMMSS
 */
function generateSlugFromDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '';
    }
    
    // 格式化为 YYYYMMDDHHMMSS
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  } catch (error) {
    console.error('Error generating slug from date:', error);
    return '';
  }
}

/**
 * 从标题中提取英文单词
 * 返回小写并用连字符连接的英文单词
 */
function extractEnglishWords(title: string): string {
  if (!title) return '';
  
  try {
    // 匹配所有英文单词（包括带下划线的词组如vibe_coding）
    const englishWords = title.match(/[a-zA-Z0-9_]+/g);
    
    if (!englishWords || englishWords.length === 0) {
      return '';
    }
    
    // 将英文单词转换为小写并用连字符连接
    return englishWords.join('-').toLowerCase();
  } catch (error) {
    console.error('Error extracting English words from title:', error);
    return '';
  }
}

/**
 * 生成文章的slug
 * 结合日期和标题中的英文单词（如果有）
 */
function generateSlug(publishDate: string, title: string): string {
  const dateSlug = generateSlugFromDate(publishDate);
  const titleSlug = extractEnglishWords(title);
  
  if (titleSlug) {
    return `${dateSlug}-${titleSlug}`;
  }
  
  return dateSlug;
}

/**
 * 从Markdown文件中获取元数据和内容
 */
function parseMarkdownFile(filePath: string): Post {
  try {
    // 读取文件内容时明确指定编码为UTF-8
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // 尝试规范化文件内容编码，处理可能存在的BOM等问题
    const normalizedContent = fileContents.replace(/^\uFEFF/, '');
    
    // 使用gray-matter解析frontmatter
    const { data, content } = matter(normalizedContent);
    
    // 安全获取日期，并确保返回 ISO 字符串
    const getValidDate = (dateInput: string | Date | undefined): string => {
      // 如果输入为空，返回当前日期的 ISO 字符串
      if (!dateInput) {
        console.warn(`Missing date in ${filePath}, using current date instead`);
        return new Date().toISOString();
      }
      
      let date: Date;

      try {
        // 尝试将输入（无论是字符串还是日期对象）转换为 Date 对象
        date = new Date(dateInput);

        // 检查转换后的日期是否有效
        if (isNaN(date.getTime())) {
          console.warn(`Invalid date format or value in ${filePath}: "${dateInput}", using current date instead`);
          return new Date().toISOString(); // 无效则返回当前日期的 ISO 字符串
        }

        // 如果日期有效，返回其 ISO 字符串表示
        return date.toISOString();

      } catch (error) {
        // 如果在 new Date() 构造过程中出现任何错误
        console.error(`Error constructing date in ${filePath} from input "${dateInput}":`, error);
        return new Date().toISOString(); // 出错则返回当前日期的 ISO 字符串
      }
    };
    
    // 确保标签是数组
    const getTags = (tags: unknown) => {
      if (!tags) return [];
      if (Array.isArray(tags)) return tags.filter(tag => tag && typeof tag === 'string');
      if (typeof tags === 'string') return [tags];
      console.warn(`Invalid tags format in ${filePath}:`, tags);
      return [];
    };

    const publishDate = getValidDate(data.publishDate);
    const title = data.title || path.basename(filePath, '.md');
    
    // 获取slug，优先级：手动设置 > 自动生成（日期+标题) > 文件名
    const generatedSlug = generateSlug(publishDate, title);
    const slug = data.slug || (generatedSlug ? generatedSlug : path.basename(filePath, '.md'));
    
    // 提取元数据
    const meta = {
      title,
      publishDate,
      slug,
      tags: getTags(data.tags),
      featuredImage: data.featuredImage || null,
      excerpt: data.excerpt || content.trim().split('\n')[0].slice(0, 150),
    };
    
    return {
      ...meta,
      content,
      rawContent: normalizedContent
    };
  } catch (error) {
    console.error(`Error parsing markdown file ${filePath}:`, error);
    // 提供一个基本的后备对象而不是让操作完全失败
    const now = new Date();
    const nowString = now.toISOString();
    const title = path.basename(filePath, '.md');
    const generatedSlug = generateSlug(nowString, title);
    
    return {
      title,
      publishDate: nowString,
      slug: generatedSlug || path.basename(filePath, '.md'),
      tags: [],
      content: '内容解析出错',
      rawContent: '内容解析出错'
    };
  }
}

/**
 * 获取所有文章
 */
export function getAllPosts(): Post[] {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }
  
  try {
    // 读取目录中的所有文件
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        try {
          const filePath = path.join(postsDirectory, fileName);
          return parseMarkdownFile(filePath);
        } catch (error) {
          console.error(`Error processing file ${fileName}:`, error);
          // 提供后备对象
          return {
            title: fileName.replace('.md', ''),
            publishDate: new Date().toISOString(),
            slug: fileName.replace('.md', ''),
            tags: [],
            content: '内容处理出错',
            rawContent: '内容处理出错'
          };
        }
      })
      .sort((a, b) => {
        try {
          const dateA = new Date(a.publishDate).getTime();
          const dateB = new Date(b.publishDate).getTime();
          
          // 验证日期有效性
          if (isNaN(dateA) || isNaN(dateB)) {
            console.warn(`Invalid date comparison: ${a.publishDate} vs ${b.publishDate}`);
            return 0; // 保持顺序不变
          }
          
          return dateB - dateA;
        } catch (error) {
          console.error('Date comparison error:', error);
          return 0; // 保持顺序不变
        }
      });
    
    return allPosts;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * 获取指定slug的文章
 */
export function getPostBySlug(slug: string): Post | null {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }
  
  // 尝试直接匹配文件名
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return parseMarkdownFile(filePath);
  }
  
  // 如果直接匹配文件名失败，则遍历所有文章查找slug
  const posts = getAllPosts(); // 注意：这里会再次调用parseMarkdownFile
  const post = posts.find((p) => p.slug === slug);
  
  return post || null;
}

/**
 * 获取所有文章的元数据
 */
export function getAllPostMetas(): PostMeta[] {
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
    : '';

  const posts = getAllPosts();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return posts.map(({ content: _, ...meta }) => {
    return {
      ...meta,
      featuredImage: meta.featuredImage ? `${basePath}${meta.featuredImage}` : null,
    };
  });
}

/**
 * 将Markdown转换为HTML
 * @deprecated Use react-markdown component instead for client-side rendering.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  
  return result.toString();
}

/**
 * 获取单页面内容
 */
export function getPageContent(slug: string): Post | null {
  // 确保目录存在
  if (!fs.existsSync(pagesDirectory)) {
    fs.mkdirSync(pagesDirectory, { recursive: true });
    return null;
  }
  
  const filePath = path.join(pagesDirectory, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return parseMarkdownFile(filePath);
  }
  
  return null;
}

/**
 * 获取所有文章标签
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  
  // 从所有文章中收集标签，并去除重复项
  const tagsSet = new Set<string>();
  
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => {
        if (tag && typeof tag === 'string') {
          tagsSet.add(tag);
        }
      });
    }
  });
  
  // 转换为数组并排序
  return Array.from(tagsSet).sort();
} 