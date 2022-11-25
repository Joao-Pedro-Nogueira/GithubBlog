import styled, { ThemeConsumer } from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-bottom: 3rem;

  header {
    margin-top: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${({theme}) => theme.colors["base-subtitle"]};
      font-size: ${({theme}) => theme.textSizes["title-title-s"]};
      font-weight: 700;
    }
    
    span {
      color: ${({theme}) => theme.colors["base-span"]};
      font-size: ${({theme}) => theme.textSizes["text-text-s"]};
    }
  }

  input {
    width: 100%;
    background-color: ${({theme}) => theme.colors["base-input"]};
    border: 1px solid ${({theme}) => theme.colors["base-border"]};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    color: ${({theme}) => theme.colors["base-text"]};

    &::placeholder {
      color: ${({theme}) => theme.colors["base-label"]};
      font-size: ${({theme}) => theme.textSizes["text-text-m"]};
    }

    :focus{
      border: 1px solid ${({theme}) => theme.colors["brand-blue"]};
    }
  }
`