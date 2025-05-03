import { GetServerSideProps } from 'next';
import { getAllPostMetas, getAllTags } from '@/lib/content';
import { getSiteConfig } from '@/lib/config';

// 网站域名，部署后需要替换为实际域名
function getSiteUrl() {
  // 根据环境变量或配置决定使用哪个域名
  const siteConfig = getSiteConfig();
  const adminUrl = siteConfig.adminUrl || '';
  
  // 如果有配置管理URL，从中获取域名
  if (adminUrl && adminUrl.startsWith('http')) {
    const url = new URL(adminUrl);
    return `${url.protocol}//${url.host}`;
  }
  
  // 默认使用环境变量或生产环境URL
  return process.env.SITE_URL || 'https://yxnexus.com';
}

function generateSiteMap(
  postSlugs: string[], 
  tags: string[]
) {
  const siteUrl = getSiteUrl();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- 添加首页 -->
     <url>
       <loc>${siteUrl}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     
     <!-- 添加归档页 -->
     <url>
       <loc>${siteUrl}/archive</loc>
       <changefreq>daily</changefreq>
       <priority>0.8</priority>
     </url>
     
     <!-- 添加标签页 -->
     <url>
       <loc>${siteUrl}/tags</loc>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     
     <!-- 添加关于页 -->
     <url>
       <loc>${siteUrl}/about</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     
     <!-- 添加友链页 -->
     <url>
       <loc>${siteUrl}/links</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     
     <!-- 添加所有文章页 -->
     ${postSlugs
       .map((slug) => {
         return `
       <url>
           <loc>${siteUrl}/posts/${slug}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.9</priority>
       </url>
     `;
       })
       .join('')}
     
     <!-- 添加所有标签页 -->
     ${tags
       .map((tag) => {
         return `
       <url>
           <loc>${siteUrl}/tags/${encodeURIComponent(tag)}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

// 这个函数会在每次请求时执行，所以站点地图总是最新的
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // 获取所有文章和标签
  const allPosts = getAllPostMetas();
  const postSlugs = allPosts.map((post) => post.slug);
  const tags = getAllTags();

  // 生成站点地图XML
  const sitemap = generateSiteMap(postSlugs, tags);

  // 设置正确的头部
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  // 写入响应
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

// 默认导出一个空组件，因为我们只使用getServerSideProps
export default function Sitemap() {
  // 此组件不会被渲染
  return null;
} 