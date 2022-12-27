import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME
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

export interface IPost {
  title: string,
  body: string,
  created_at: string,
  number: number,
  html_url: string,
  comments: number,
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ):(
        <PostListContainer>
          {posts.map((post) => {
            return <Post key={post.number} post={post} />
          })}
        </PostListContainer>
      )}
    </>
  )
}
