import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetch("http://localhost:3005/posts", {
    cache: "no-store",
  });
  const posts = await data.json();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar count={posts.length} />
        <div className="flex flex-row h-screen">
          <nav className="w-1/6 p-4 bg-gray-900 text-white">
            <div className="text-lg font-bold">
              <Link href={`/posts`}>Posts</Link>
            </div>
            <ul className="space-y-4">
              {posts.map((post: any) => (
                <li key={post.id}>
                  <Link
                    href={`/posts/${post.id}`}
                    className="block bg-gray-100 hover:bg-gray-200 text-blue-500 py-2 px-4 rounded"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main className="w-5/6 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
