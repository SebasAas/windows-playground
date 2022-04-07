import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url('img/windows-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Button = styled.button`
  height: auto;
  width: 100%;
  background-color: #ececec;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;
  color: #3e3e3e;
  font-size: 14px;
  padding: 10px;

  &:hover {
    background-color: #fff;
  }
`;

export const CreateFolderWrapper = styled.div`
  height: calc(100% - 35px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    font-weight: 500;
    margin: 20px 0;
  }

  input {
    height: 30px;
    width: 45%;
    text-align: center;
    border: none;
    border-bottom: 1px solid;
    color: #505050;
    margin-bottom: 20px;
  }

  button {
    margin-bottom: 20px;
    height: 30px;
    width: 90px;
    background: transparent;
    border-radius: 5px;
    background-color: #52339e;
    color: white;
    border-color: transparent;
    cursor: pointer;
  }
`;
