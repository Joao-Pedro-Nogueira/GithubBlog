import { PostCard } from "./style";

interface PostProps {
  name: string;
  description: string;
  updatedAt: string;
}

export function Post({ name, description, updatedAt}: PostProps) {
  return (
    <PostCard to="/post/1">
      <header>
        <h3>{name}</h3>
        <span>{updatedAt}</span>
      </header>
      <p>{description}</p>
    </PostCard>
  )
}