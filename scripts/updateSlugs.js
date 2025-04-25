const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 内容目录
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

/**
 * 从标题中提取英文单词
 */
function extractEnglishWords(title) {
  if (!title) return '';
  
  try {
    // 匹配所有英文单词
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
 * 根据日期生成slug
 */
function generateSlugFromDate(dateString) {
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
 * 生成文章的slug
 */
function generateSlug(publishDate, title) {
  const dateSlug = generateSlugFromDate(publishDate);
  const titleSlug = extractEnglishWords(title);
  
  if (titleSlug) {
    return `${dateSlug}-${titleSlug}`;
  }
  
  return dateSlug;
}

/**
 * 更新所有文章的slug
 */
async function updateSlugs() {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    console.log('文章目录不存在，请确认路径：', postsDirectory);
    return;
  }
  
  try {
    // 读取目录中的所有文件
    const fileNames = fs.readdirSync(postsDirectory);
    
    // 记录更新统计
    let updated = 0;
    let skipped = 0;
    let failed = 0;
    
    // 处理每个Markdown文件
    for (const fileName of fileNames) {
      if (!fileName.endsWith('.md')) continue;
      
      const filePath = path.join(postsDirectory, fileName);
      
      try {
        // 读取文件内容
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // 如果已有自定义slug，则跳过
        if (data.slug) {
          console.log(`[跳过] 已有自定义slug: ${fileName}`);
          skipped++;
          continue;
        }
        
        // 获取标题和发布日期
        const title = data.title || path.basename(fileName, '.md');
        const publishDate = data.publishDate || new Date().toISOString();
        
        // 生成新的slug
        const newSlug = generateSlug(publishDate, title);
        
        // 添加slug到frontmatter
        data.slug = newSlug;
        
        // 重新生成文件内容
        const updatedFileContent = matter.stringify(content, data);
        
        // 写入文件
        fs.writeFileSync(filePath, updatedFileContent, 'utf8');
        
        console.log(`[更新] ${fileName} -> slug: ${newSlug}`);
        updated++;
      } catch (error) {
        console.error(`[错误] 处理文件 ${fileName} 失败:`, error);
        failed++;
      }
    }
    
    // 输出统计结果
    console.log('\n===== 更新完成 =====');
    console.log(`共处理 ${updated + skipped + failed} 个文件`);
    console.log(`- 已更新: ${updated} 个`);
    console.log(`- 已跳过: ${skipped} 个（已有自定义slug）`);
    console.log(`- 失败: ${failed} 个`);
    
  } catch (error) {
    console.error('更新过程中发生错误:', error);
  }
}

// 执行更新
updateSlugs().catch(err => {
  console.error('执行脚本时发生错误:', err);
  process.exit(1);
}); 