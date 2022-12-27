import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostCard } from "./style";

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <PostCard to={`/post/${post.number}`}>
      <header>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </header>
      <p>{post.body}</p>
    </PostCard>
  )
}