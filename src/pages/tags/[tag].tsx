import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { PostCard } from "@/components/blog/PostCard";
import { getAllPostMetas, type PostMeta } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { getSiteConfig, type SiteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { HeadMeta } from '@/components/layout/HeadMeta';

// Define props type
interface TagPageProps {
  tag: string;
  taggedPosts: PostMeta[];
  siteConfig: SiteConfig;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPostMetas();
  // 收集所有唯一标签
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag));
  });

  // 为每个标签创建路径 - 在这里不进行编码，让Next.js自己处理路径编码
  const paths = Array.from(tags).map(tag => {
    console.log(`Creating path for tag: "${tag}"`);
    return {
      params: { tag }, // 使用原始标签名作为参数
    };
  });

  console.log("Generated tag paths:", paths); // 调试信息

  // 使用'false'，适用于静态导出模式
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TagPageProps, { tag: string }> = async (context) => {
  try {
    const tagParam = context.params?.tag;
    if (!tagParam) {
      return { notFound: true };
    }
    
    // 不需要额外解码，因为Next.js已经处理了URL参数的解码
    const tag = tagParam;
    console.log(`Getting posts for tag: ${tag}`); // 调试信息
  
    const allPosts = getAllPostMetas();
    
    // 添加健壮的日期解析，确保无效日期不会导致构建失败
    const validateDate = (dateStr: string) => {
      try {
        const date = new Date(dateStr);
        // 检查是否是有效日期
        if (isNaN(date.getTime())) {
          console.warn(`无效的日期字符串: ${dateStr}`);
          // 返回一个默认日期（当前日期减去一天）而不是直接抛出错误
          return new Date(Date.now() - 86400000).getTime(); 
        }
        return date.getTime();
      } catch (error) {
        console.error(`日期解析错误: ${dateStr}`, error);
        // 出错时返回一个默认日期时间戳
        return new Date(Date.now() - 86400000).getTime();
      }
    };
    
    // 过滤并排序文章，添加额外的错误处理
    const taggedPosts = allPosts
      .filter(post => {
        // 确保post.tags是数组并包含目标标签
        return post.tags && Array.isArray(post.tags) && post.tags.includes(tag);
      })
      .sort((a, b) => {
        // 使用健壮的日期解析函数
        return validateDate(b.publishDate) - validateDate(a.publishDate);
      });
  
    if (taggedPosts.length === 0) {
      console.log(`No posts found for tag: ${tag}`); // 调试信息
      return { notFound: true }; 
    }
  
    console.log(`Found ${taggedPosts.length} posts for tag: ${tag}`); // 调试信息
  
    const siteConfig = getSiteConfig();
  
    return {
      props: {
        tag,
        taggedPosts,
        siteConfig,
      },
    };
  } catch (error) {
    // 捕获并记录任何错误
    console.error(`Error processing tag ${context.params?.tag}:`, error);
    
    // 返回notFound而不是让构建失败
    return { notFound: true };
  }
};

// 生成云朵SVG路径
function generateCloudPath(): string {
  // 生成随机的云朵路径
  const centerX = 50;
  const centerY = 40;
  const radius = 25 + Math.random() * 10;
  
  // 创建基本的云朵形状
  let path = `M${centerX - radius * 0.8},${centerY} `;
  
  // 添加几个圆形突起来创建云朵效果
  const bumps = 5 + Math.floor(Math.random() * 3);
  const angleStep = (2 * Math.PI) / bumps;
  
  for (let i = 0; i < bumps; i++) {
    const angle = i * angleStep;
    const bumpRadius = radius * (0.7 + Math.random() * 0.3);
    const x = centerX + Math.cos(angle) * bumpRadius;
    const y = centerY + Math.sin(angle) * bumpRadius * 0.6;
    
    path += `Q${centerX + Math.cos(angle + angleStep/2) * bumpRadius * 1.2},`
    path += `${centerY + Math.sin(angle + angleStep/2) * bumpRadius * 0.8} `
    path += `${x},${y} `;
  }
  
  // 闭合路径
  path += 'Z';
  return path;
}

// 设置不显示页脚
TagPage.showFooter = false;

export default function TagPage({ tag, taggedPosts, siteConfig }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [cloudPaths, setCloudPaths] = useState<string[]>([]);
  
  // 生成装饰云朵
  useEffect(() => {
    const paths = Array.from({ length: 4 }, () => generateCloudPath());
    setCloudPaths(paths);
  }, []);
  
  // 云朵装饰背景动画
  const cloudVariants = {
    initial: () => ({
      opacity: 0.03 + Math.random() * 0.07,
      x: -20,
      y: -10 + Math.random() * 20
    }),
    animate: () => ({
      opacity: 0.04 + Math.random() * 0.06,
      x: 20,
      y: -10 + Math.random() * 20,
      transition: {
        duration: 30 + Math.random() * 40,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear",
        delay: Math.random() * 2
      }
    })
  };
  
  // 容器动画
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };
  
  // 文章卡片动画
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.3 }
    }
  };

  return (
    <>
      <HeadMeta
        title={`${tag} - 标签`}
        description={`查看所有带有 "${tag}" 标签的文章列表`}
        siteConfig={siteConfig}
      />
      
      <div className="relative py-6 md:py-10 min-h-[calc(100vh-8rem)]">
        {/* 装饰云朵背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {cloudPaths.map((path, i) => (
            <motion.svg
              key={i}
              className="absolute"
              width="200"
              height="120"
              viewBox="0 0 100 80"
              style={{
                top: `${10 + Math.random() * 70}%`,
                left: `${Math.random() * 70}%`,
                width: `${150 + Math.random() * 100}px`,
                height: `${100 + Math.random() * 60}px`,
              }}
              custom={i}
              variants={cloudVariants}
              initial="initial"
              animate="animate"
            >
              <path
                d={path}
                fill="currentColor"
                className="text-primary/10"
              />
            </motion.svg>
          ))}
        </div>
        
        {/* 标签头部区域 */}
        <div className="relative flex flex-col items-center mb-12 z-10">
          {/* 返回标签云按钮 */}
          <motion.div 
            className="absolute top-6 left-6 z-10"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/tags/" className="flex items-center text-sm hover:text-primary transition-colors bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              返回标签云
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 px-8 py-3 rounded-full bg-warm-paper backdrop-blur-sm border border-primary/30 mb-8 shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 120,
              damping: 14
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <span className="font-medium text-xl">{tag}</span>
            <Badge variant="default" className="ml-1 px-2 py-0.5">
              {taggedPosts.length} 篇文章
            </Badge>
          </motion.div>
        </div>
        
        {/* 文章列表 */}
        <motion.div 
          className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {taggedPosts.map((post) => (
            <motion.div 
              key={post.slug} 
              variants={cardVariants}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <PostCard
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt || ''}
                publishDate={post.publishDate}
                tags={post.tags}
                featuredImage={post.featuredImage}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
} 