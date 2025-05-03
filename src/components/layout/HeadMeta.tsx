import Head from 'next/head';
import { SiteConfig } from '@/lib/config';
import { useRouter } from 'next/router';

interface HeadMetaProps {
  title?: string;
  description?: string;
  ogImage?: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  publishDate?: string;
  tags?: string[];
  siteConfig: SiteConfig;
}

export function HeadMeta({ 
  title, 
  description, 
  ogImage, 
  keywords,
  author,
  canonicalUrl,
  publishDate,
  tags,
  siteConfig 
}: HeadMetaProps) {
  const router = useRouter();
  const siteTitle = siteConfig?.title || '🧑‍🚀YuCreate\'s Blog';
  const siteDescription = description || siteConfig?.description || '禹创的个人博客 Learning | Thinking | Practicing';
  const ogImg = ogImage || siteConfig?.logo || '/images/logo.png';
  const siteAuthor = author || siteConfig?.author || '';
  
  // 构建标题: 如果提供了自定义标题，则使用"自定义标题 - 网站标题"的格式
  const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;
  
  // 确定当前页面的完整URL
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const path = router.asPath;
  const currentUrl = canonicalUrl || `${origin}${path}`;
  
  // 构建关键词
  let siteKeywords = keywords || '';
  if (tags && tags.length > 0 && !keywords) {
    siteKeywords = tags.join(', ');
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      
      {/* 基本元数据 */}
      {siteKeywords && <meta name="keywords" content={siteKeywords} />}
      {siteAuthor && <meta name="author" content={siteAuthor} />}
      
      {/* 规范链接 - 避免重复内容问题 */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={publishDate ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImg} />
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {tags && tags.map((tag, i) => (
        <meta property="article:tag" content={tag} key={i} />
      ))}
      {siteAuthor && <meta property="article:author" content={siteAuthor} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImg} />
      {siteAuthor && <meta name="twitter:creator" content={siteAuthor} />}
      
      {/* 结构化数据 - JSON-LD */}
      {publishDate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: title,
              image: ogImg,
              author: {
                '@type': 'Person',
                name: siteAuthor,
              },
              publisher: {
                '@type': 'Organization',
                name: siteTitle,
                logo: {
                  '@type': 'ImageObject',
                  url: siteConfig?.logo || '/images/logo.png',
                },
              },
              datePublished: publishDate,
              description: siteDescription,
              url: currentUrl,
              ...(tags && tags.length > 0 && { keywords: tags.join(', ') }),
            }),
          }}
        />
      )}
      
      {/* 更多SEO标签 */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
} 