export default async function Page(params: { searchParams: URLSearchParams }) {
  const { searchParams } = params;

  const url = (
    await (
      await fetch('https://api.thecatapi.com/v1/images/search', {
        cache: 'no-store',
      })
    ).json()
  )[0].url;
  return (
    <>
      <img src={url} width="300" alt="cat" />
      {new Date().toLocaleTimeString()}
      {JSON.stringify(searchParams)}
    </>
  );
}
