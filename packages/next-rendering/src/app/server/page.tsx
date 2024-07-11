// 表示设置重新验证频率为 3s
// 这句代码的效果并不是设置服务器每 3s 会自动更新一次 `/server`。而是至少 3s 后进行重新验证。
export const revalidate = 3;

export default async function Page() {
  const url = (
    await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
  )[0].url;

  return <img src={url} width="300" alt="cat" />;
}
