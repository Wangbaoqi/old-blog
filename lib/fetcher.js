export default async function fetcher(
  url = '',
  init = {}
) {
  const res = await fetch(url, init);
  return res.json();
}