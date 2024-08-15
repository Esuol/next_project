import siteMetadata from '@/data/siteMetadata';
import { dir } from 'i18next';
import ThemeSwitch from '@/components/ThemeSwitch';
import { ThemeProviders } from './theme-providers';
import './global.css';

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'zh_CN',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
};

// 添加静态路由
export async function generateStaticParams() {
  return siteMetadata.languages.map((lng) => ({ lng }));
}

// @ts-ignore
export default function RootLayout(props: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const { children, params } = props;
  const { lng } = params;
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body>
        <ThemeProviders>
          <header className="flex justify-end">
            <ThemeSwitch />
          </header>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
