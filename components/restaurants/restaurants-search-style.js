import styled, { css } from 'styled-components';

export const From = styled.form`
  margin: 2rem auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  width: 90%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    font: inherit;
    padding: 0.25rem 0.5rem;
    background-color: #dd0db0;
    border: 1px solid #dd0db0;
    color: #dafff7;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    button {
      width: 20%;
    }
  }
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

export const Control = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;

  label,
  input {
    display: block;
  }

  label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }

  input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;
