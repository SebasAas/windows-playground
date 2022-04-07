import styled from 'styled-components';

export const Searchbar = styled.div`
  width: 410px;
  min-width: 340px;
  height: 100%;
  border: 1px solid #ccc1;
  background: white;
  border-radius: 0.5px;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    padding-left: 40px;
    color: black;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  span {
    position: absolute;
    left: 15px;
    top: 7px;
  }
`;
