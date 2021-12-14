import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #202020;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  li {
    margin: 0 1rem;
  }
`;

export const LogoStyle = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: 'Fira', sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    a {
      font-size: 1.5rem;
    }
  }
`;
