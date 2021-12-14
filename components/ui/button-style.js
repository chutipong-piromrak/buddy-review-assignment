import styled, { css } from 'styled-components';

export const Btn = styled.button`
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  background-color: #dd0db0;
  border: 1px solid #dd0db0;
  border-radius: 6px;
  color: #dafff7;
  padding: 0.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  &:hover,
  &:active {
    background-color: #f3cafb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    color: #dd0db0;
  }

  ${(props) =>
    props.danger &&
    css`
      background-color: #f5360d;
      border: 1px solid #f5360d;

      &:hover,
      &:active {
        background-color: #f19a87;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
        color: #f5360d;
      }
    `}
`;

export const BtnLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font: inherit;
  background-color: #dd0db0;
  border: 1px solid #dd0db0;
  border-radius: 6px;
  color: #dafff7;
  padding: 0.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  &:hover,
  &:active {
    background-color: #f3cafb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    color: #dd0db0;
  }

  ${(props) =>
    props.danger &&
    css`
      background-color: #f5360d;
      border: 1px solid #f5360d;

      &:hover,
      &:active {
        background-color: #f19a87;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
        color: #f5360d;
      }
    `}
`;
