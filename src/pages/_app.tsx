import type { AppProps } from 'next/app';
import { Layout } from '@/components/layout/Layout'; // 确认 Layout 路径正确
import { MotionConfig } from 'framer-motion';
import '@/styles/globals.css'; // 使用新的CSS路径
// 不直接导入字体CSS，改为动态处理
// import '@/styles/ghibli-font.css'; // Load the local font CSS
import { useEffect } from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router'; // 导入 useRouter
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
            let currentBasePath = ''; // 默认为空
            // GitHub Pages specific basePath logic (Netlify will use '')
            if (window.location.hostname.includes('github.io')) {
              const pathSegments = window.location.pathname.split('/');
              if (pathSegments.length > 1 && pathSegments[1] !== '') {
                currentBasePath = `/${pathSegments[1]}`;
              }
            }
            window.location.href = `${currentBasePath}${adminPath}`;
          }
        }
      }).catch(err => {
        console.error('Failed to load netlify identity widget:', err);
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* 动态添加字体样式 */}
        <style jsx global>{`
          @font-face {
            font-family: 'GhibliFontPro';
            src: url('/fonts/Ghibli-Bold.otf') format('opentype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'GhibliFontPro';
            src: url('/fonts/Ghibli.otf') format('opentype');
            font-weight: 400;
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