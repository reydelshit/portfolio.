// src/api/github.ts
export async function getPinnedRepos(username: string) {
  const query = `
    query GetPinnedRepos($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  console.log('Fetching pinned repositories for:', username);

  if (!res.ok) {
    throw new Error('Failed to fetch pinned repositories');
  }

  const { data } = await res.json();
  return data.user.pinnedItems.nodes;
}
