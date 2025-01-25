export default async function Page({ params }) {
  const username = (await params).username
  return <div>{username}</div>
}