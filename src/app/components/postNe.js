export const runtime = "edge"
export const postBaal = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POST_API}/posts`);
  const data = await res.json();
  return data;
}