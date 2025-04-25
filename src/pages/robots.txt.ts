import { GetServerSideProps } from 'next';
import { getSiteConfig } from '@/lib/config';

function getRobotsTxt() {
  // 获取网站配置
  const siteConfig = getSiteConfig();
  const adminUrl = siteConfig.adminUrl || '';
  
  // 确定站点URL
  let siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  if (adminUrl && adminUrl.startsWith('http')) {
    const url = new URL(adminUrl);
    siteUrl = `${url.protocol}//${url.host}`;
  }
  
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // 生成robots.txt内容
  const robotsTxt = getRobotsTxt();

  // 设置正确的头部
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=43200');
  // 写入响应
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

// 默认导出一个空组件，因为我们只使用getServerSideProps
export default function Robots() {
  // 此组件不会被渲染
  return null;
} 