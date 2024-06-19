import Link from "next/link";

export default async function Page() {
  return (
    <>
      <h1>Hello, Search UI</h1>
      <ul>
        <li>
          <Link href="/url-bind">/url-bind</Link>
        </li>
        <li>
          <Link href="/server-action">/server-action</Link>
        </li>
      </ul>
    </>
  );
}
