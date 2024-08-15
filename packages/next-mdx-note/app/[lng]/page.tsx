import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { useTranslation } from '@/i18n/index';
import Like from '@/[lng]/posts/like';

export const generateMetadata = async (props: { params: { lng: string } }) => {
  const { lng } = props.params;
  const { t } = await useTranslation(lng, 'posts');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: '博客列表',
      description: '这是博客列表页面',
    },
  };
};

// @ts-ignore
function PostCard({ lng, ...post }) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`/${lng}${post.url}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {dayjs(post.date).format('DD/MM/YYYY')}
      </time>
      <Like lng={lng} />
    </div>
  );
}

// @ts-ignore
export default async function Home(parms: { params: { lng: string } }) {
  const { lng } = parms.params;
  const { t } = await useTranslation(lng);
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">{t('blogList')}</h1>
      {allPosts.map((post, idx) => (
        <PostCard key={idx} {...post} lng={lng} />
      ))}
    </div>
  );
}
