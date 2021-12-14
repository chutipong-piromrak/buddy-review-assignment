import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #d2b4de;

  span {
    display: block;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const IconStyled = styled.span`
  margin-right: 1rem;
  color: #d2b4de;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
