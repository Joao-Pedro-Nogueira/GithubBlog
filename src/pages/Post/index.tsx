import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { IPost } from "../Blog";
import { PostContent } from "./components/PostContent";
import { Postheader } from "./components/PostHeader";
import { PostContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME


export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)
  
  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostContainer>
        <Postheader postData={postData} isLoading={isLoading} />
        {!isLoading && <PostContent content={postData.body} />}
      </PostContainer>
    </>
  )
}