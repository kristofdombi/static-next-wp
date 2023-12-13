import Link from "next/link";

import { getPosts } from "@/utils/getPosts";

async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-center text-4xl">Posts</h1>
        <ul className="flex flex-col place-items-center list-none p-0">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <div className="flex flex-col items-center justify-center w-full h-full p-8 text-center rounded-xl lg:p-16 lg:rounded-2xl">
                  <h2 className="text-2xl font-bold">{post.title}</h2>
                  <p className="mt-4 text-sm opacity-50">{post.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;
