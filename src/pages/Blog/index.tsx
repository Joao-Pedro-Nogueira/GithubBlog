import { useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

interface ReposType {
  id: string;
  name: string;
  html_url: string;
  description: string;
  updated_at: string;
}

interface ProfileType {
  avatar_url: string;
  html_url: string;
  login: string;
  name: string;
  company: string;
  followers: number;
  bio: string;
}

export function Blog() {
  const [repos, setRepos] = useState<ReposType[]>([]) // Cria o estado que armazena os repositórios
  const [profData, setProfData] = useState<ProfileType>()

  useEffect(() => {
    fetch('https://api.github.com/users/Joao-Pedro-Nogueira/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/Joao-Pedro-Nogueira')
    .then(response => response.json())
    .then(profData => setProfData(profData))
  }, [])

  return (
    <>
      <Profile name={profData.name} avatarUrl={profData.avatar_url} htmlUrl={profData.html_url} login={profData.login} company={profData.company} followers={profData.followers} bio={profData.bio} />
      <SearchInput />
      <PostListContainer>
        {repos.map((repo) => {
          return <Post key={repo.id} name={repo.name} description={repo.description} updatedAt={repo.updated_at} />
        })}
      </PostListContainer>
    </>
  )
}
