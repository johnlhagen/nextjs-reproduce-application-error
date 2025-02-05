import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Reproduce issue with "??"</h1>
      <Link href={"/a"}>link to the problematic page</Link>
    </main>
  );
}
