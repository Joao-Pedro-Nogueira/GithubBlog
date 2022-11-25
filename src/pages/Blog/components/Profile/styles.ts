import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background-color: ${({theme}) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${({theme}) => theme.textSizes["title-title-l"]};
      color: ${({theme}) => theme.colors["base-title"]};
      line-height: 130%;
      margin-bottom: 0.5rem;
    }
  }
  ul {
    margin-top: 1.5rem;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${({theme}) => theme.colors["base-subtitle"]};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({theme}) => theme.colors["base-label"]};
      }
    }
  };
`