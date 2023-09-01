import styled from 'styled-components';

export const ButtonStyled = styled.button`
  &:not(:last-child) {
    margin-right: 20px;
  }

  &:active {
    color: white;
    background-color: blue;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;
