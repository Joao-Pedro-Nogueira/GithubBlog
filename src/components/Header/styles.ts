import styled from "styled-components";
import HeaderBg from '../../assets/header-bg.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4rem;
`