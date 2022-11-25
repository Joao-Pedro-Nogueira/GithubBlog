import styled from "styled-components";

export const PostCard = styled.div`
  background-color: ${({theme}) => theme.colors["base-post"]};
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 2px solid ${({theme}) => theme.colors["base-post"]};
  cursor: pointer;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      font-size: ${({theme}) => theme.textSizes["title-title-m"]};
      color: ${({theme}) => theme.colors["base-title"]};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      color: ${({theme}) => theme.colors["base-span"]};
      font-size: ${({theme}) => theme.textSizes["text-text-s"]};
      white-space: nowrap;
    }
  }

  p {
    font-size: ${({theme}) => theme.textSizes["text-text-m"]};
    color: ${({theme}) => theme.colors["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  :hover {
  border: 2px solid ${({theme}) => theme.colors["base-label"]};
  }
`