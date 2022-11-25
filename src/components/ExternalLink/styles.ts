import styled from "styled-components";

export const ExternalLinkContainer = styled.a`
  border: none;
  background: none;
  color: ${({theme}) => theme.colors["brand-blue"]};
  font-size: ${({theme}) => theme.textSizes["components-link"]};
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: 0.2s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 29px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({theme}) => theme.colors["brand-blue"]};
  }
`