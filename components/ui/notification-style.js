import styled, { css } from 'styled-components';

export const Noti = styled.section`
  width: 100%;
  height: 3rem;
  background-color: #1a8ed1;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  align-items: center;
  color: white;

  h2,
  p {
    font-size: 1rem;
    margin: 0;
  }

  ${(props) => {
    if (props.status === 'success')
      return css`
        background-color: #1ad1b9;
      `;
    else
      return css`
        background-color: #690000;
      `;
  }}
`;
