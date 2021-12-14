import styled from 'styled-components';

export const AuthStyle = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;

export const Control = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

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
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;
