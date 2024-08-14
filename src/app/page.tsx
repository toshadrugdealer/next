import Link from "next/link";

export default function Home() {
  return (
    <>
      <title>Home</title>
      <main className="flex flex-col text-4xl text-center">
        <Link href="/todo">Todo</Link>
        <Link href="/products">Products</Link>
      </main>
    </>
  );
}
