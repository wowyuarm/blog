import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout/Layout'; // 确认 Layout 路径正确
import { MotionConfig } from 'framer-motion';
import '@/styles/globals.css'; // 使用新的CSS路径
// 不直接导入字体CSS，改为动态处理
// import '@/styles/ghibli-font.css'; // Load the local font CSS
import { useEffect } from 'react';
import Head from 'next/head';
// import { getSiteConfig } from '@/lib/config'; // Removed unused import
// import { SiteConfig } from '@/lib/config'; // Removed unused type import
// import { NextComponentType, NextPageContext } from 'next'; // Removed unused imports

// Define a type for the Component that includes optional layout props
type ComponentWithLayoutProps = AppProps['Component'] & {
  showHeader?: boolean;
  showFooter?: boolean;
}

// Define the AppProps with the extended Component type
type MyAppProps = AppProps & {
  Component: ComponentWithLayoutProps;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  // Assume siteConfig is always provided by getStaticProps for regular pages
  // For 404 or other error pages, siteConfig might be undefined.
  // Layout/Footer components need to handle undefined siteConfig gracefully.
  const siteConfig = pageProps.siteConfig;

  const showHeader = Component.showHeader !== false;
  const showFooter = Component.showFooter !== false;

  // 初始化Netlify Identity Widget
  useEffect(() => {
    // 检查window对象是否存在（在服务器端渲染时不存在）
    if (typeof window !== 'undefined') {
      // 动态导入netlify-identity-widget
      import('netlify-identity-widget').then(({ default: netlifyIdentity }) => {
        netlifyIdentity.init();

        // 处理登录后重定向
        if (window.location.hash.includes('#confirmation_token=') ||
            window.location.hash.includes('#access_token=')) {
          const adminPath = '/admin/';
          if (!window.location.pathname.endsWith(adminPath)) {
            // 获取GitHub Pages的正确路径
            let basePath = '';
            
            // 检测是否在GitHub Pages环境
            if (window.location.hostname.includes('github.io')) {
              // 从URL路径中提取仓库名称
              const pathSegments = window.location.pathname.split('/');
              if (pathSegments.length > 1) {
                basePath = `/${pathSegments[1]}`;
              }
            }
            
            window.location.href = `${basePath}${adminPath}`;
          }
        }
      }).catch(err => {
        console.error('Failed to load netlify identity widget:', err);
      });
    }
  }, []);

  // 获取正确的basePath
  const getBasePath = () => {
    // 在客户端，可以从window.location获取
    if (typeof window !== 'undefined') {
      // GitHub Pages环境
      if (window.location.hostname.includes('github.io')) {
        const pathSegments = window.location.pathname.split('/');
        if (pathSegments.length > 1) {
          return `/${pathSegments[1]}`;
        }
      }
    }
    
    // 在服务器端或者非GitHub Pages环境，返回空字符串
    return '';
  };

  const basePath = getBasePath();

  return (
    <>
      <Head>
        {/* 动态添加字体样式 */}
        <style jsx global>{`
          @font-face {
            font-family: 'GhibliFontPro';
            src: url('${basePath}/fonts/Ghibli-Bold.otf') format('opentype');
            font-weight: 600, 700;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'GhibliFontPro';
            src: url('${basePath}/fonts/Ghibli.otf') format('opentype');
            font-weight: 300, 400, 500;
            font-style: normal;
            font-display: swap;
          }

          :root {
            --font-ghibli: 'GhibliFontPro', ui-sans-serif, system-ui, sans-serif;
          }
        `}</style>
      </Head>
      <MotionConfig reducedMotion="user">
        {/* Pass siteConfig to Layout */}
        <Layout siteConfig={siteConfig} showHeader={showHeader} showFooter={showFooter}>
          <Component {...pageProps} />
        </Layout>
      </MotionConfig>
    </>
  );
}

export default MyApp; 