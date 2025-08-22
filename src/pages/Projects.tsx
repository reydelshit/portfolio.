import { getPinnedRepos } from '@/api/github';
import { useEffect, useState } from 'react';

interface Repo {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: {
    name: string;
    color: string;
  };
}

const Projects = () => {
  const username = 'reydelshit';

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPinned() {
      try {
        const data = await getPinnedRepos(username);
        setRepos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchPinned();
  }, [username]);

  if (loading)
    return (
      <div className="flex h-[300px] items-center justify-center py-4">
        <p>Loading pinned repos...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-[2rem] flex h-fit flex-col items-start gap-4">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-md font-bold md:text-2xl">Projects </h1>

          <span className="text-secondary mt-5 block text-xs">only pinned repos are shown here.</span>
        </div>
        <div className="w-[60%]">
          <p className="text-secondary text-xs text-wrap">
            Some projects are not disclosed due to signed non-disclosure agreements (NDAs).
          </p>
          <span className="text-end text-xs font-semibold">More projects: github.com/reydelshit</span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        {repos.map((repo, index) => (
          <div key={index} className="pb-3 last:border-none">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h2 className="md:text-md flex items-center gap-2 text-sm font-bold">
                {repo.name}
                {repo.primaryLanguage && (
                  <span className="flex items-center gap-1 rounded-md bg-[#EEEFF0] px-2 py-0.5 text-xs text-[#54575E]">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: repo.primaryLanguage.color }}
                    ></span>
                    {repo.primaryLanguage.name}
                  </span>
                )}
              </h2>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-end text-xs hover:underline"
              >
                {repo.url.replace('https://github.com/', '').slice(0, 35) + (repo.url.length > 35 ? '...' : '')}
              </a>
            </div>

            {repo.description && <p className="mt-1 text-sm leading-[20px] text-gray-600">{repo.description}</p>}

            <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
              <span>⭐ {repo.stargazerCount}</span>
              <span>🍴 {repo.forkCount}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
