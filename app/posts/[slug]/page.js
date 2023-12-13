import { Suspense } from "react";
import Link from "next/link";

import { getPosts } from "@/utils/getPosts";
import { getPost } from "@/utils/getPost";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex min-h-screen flex-col gap-4 px-8 py-24">
        <article className="pt-8 prose dark:prose-dark">
          <h1 className="text-4xl mb-8">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <Link href="/">👈 Back to Home</Link>
      </main>
    </Suspense>
  );
}
