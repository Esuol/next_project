// article/[id]/page.js
// @ts-ignore
export default async function Page({ params: { id } }) {
  const articleModule = await import(`../../content/${id}.mdx`);
  const {
    default: Component,
    frontmatter: { title, author },
  } = articleModule;

  return (
    <main>
      <div>文章标题：{title}</div>
      <div>文章作者：{author}</div>
      <Component />
    </main>
  );
}
