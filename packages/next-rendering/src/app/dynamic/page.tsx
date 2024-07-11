import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme') || 'light';

  const url = (
    await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
  )[0].url;

  return <img src={url} width="300" alt="cat" />;
}
