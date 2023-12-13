export async function getPosts() {
  const query = `{
      posts {
        nodes {
          title
          slug
        }
      }
    }`;

  const postsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query,
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const result = await postsResponse.json();

  return result.data.posts.nodes;
}
