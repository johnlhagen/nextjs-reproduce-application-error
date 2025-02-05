import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ul style={{ textDecoration: "underline", marginBottom: "50px" }}>
        {/*Direct link works:*/}
        <li>
          <Link href={"/b"} prefetch={false}>
            Direct link to /b
          </Link>
        </li>
        {/*Link to rewrite breaks:*/}
        <li>
          <Link href={"/rewrite-to-b"} prefetch={false}>
            Link to /b through rewrite
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}
