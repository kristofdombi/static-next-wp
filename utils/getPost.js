export async function getPost(slug) {
  const query = `{
      post(id: "${slug}", idType: SLUG) {
        id
        title
        content
      }
    }`;

  const postResponse = await fetch(
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
  const result = await postResponse.json();

  return result.data.post;
}
