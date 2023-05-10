import Image from "next/image";
import Link from "next/link";
import ButtonPanel from "../components/ActionComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href={"posts"}
        className="flex flex-col items-center justify-center"
      >
        posts
      </Link>
    </main>
  );
}
