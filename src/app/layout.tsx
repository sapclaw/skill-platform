import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '智能体技能组件平台 | 数字龙标',
    template: '%s | 智能体技能组件平台',
  },
  description:
    '智能体技能组件开发与测试平台，汇聚38+精选技能组件，涵盖AI能力、数据库存储、集成服务等领域，助力数字工匠高效构建智能体应用。',
  keywords: [
    '智能体',
    '技能组件',
    'AI能力',
    '大语言模型',
    '图像生成',
    '数据库',
    '集成服务',
    '数字工匠',
    '数字龙标',
  ],
  authors: [{ name: '数字龙标', url: 'https://www.longbiao.com' }],
  generator: '扣子编程',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: '智能体技能组件平台 | 数字龙标',
    description:
      '汇聚38+精选技能组件，涵盖AI能力、数据库存储、集成服务等领域',
    url: 'https://skill.longbiao.com',
    siteName: '数字龙标智能体平台',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased min-h-screen flex flex-col`}>
        {isDev && <Inspector />}
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
