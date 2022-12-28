import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h1, h2, h3 {
    color: ${({theme}) => theme.colors["brand-blue"]};
  }

  img {
    max-width: 100%;
    margin-block: 1rem;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
`