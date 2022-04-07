import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  position: absolute;
  /* bottom: 45px; */
  bottom: -800px;
  width: 55%;
  max-width: 800px;
  height: 600px;
  border-radius: 1px;
  z-index: 2;
`;

export const MenuAplication = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  background: rgb(43, 43, 43);
  /* backdrop-filter: blur(4px); */
`;

export const MenuShortcut = styled.div`
  height: 100%;
  width: 60%;
  background: rgba(43, 43, 43, 0.95);
  /* backdrop-filter: blur(4px); */
  border-radius: 2px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50px;
  padding: 20px 5px;
`;

export const HamburgerIcon = styled.img`
  height: 15px;
`;

export const TurnOffIcon = styled.img`
  height: 22px;
`;

export const Applications = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden scroll;
  height: 100%;
  width: calc(100% - 50px);
  padding: 17px 10px;
  color: white;

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: #999;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }
  }

  h1:first-of-type {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 15px 10px;
  }

  h1:last-of-type {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin: 15px 0 15px 10px;
  }

  div {
    display: flex;
    align-items: center;
    min-height: 40px;
    width: 100%;
    margin: 7px 0;
    cursor: pointer;
    border-radius: 1px;

    h2 {
      height: 18px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      margin-left: 17px;
      text-align: initial;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      object-fit: cover;
      height: auto;
      width: 33px;
      margin-left: 10px;
    }

    &:hover {
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(189, 189, 189, 0.75) 100%,
        rgba(222, 221, 221, 0.75) 100%,
        rgba(189, 189, 189, 0.75) 100%
      );
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: white;

  img {
    margin-top: -80px;
    width: 88px;
    height: auto;
    border-radius: 100%;
  }

  p:first-of-type {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin: 5px;
  }

  p:last-of-type {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Shortcuts = styled.div`
  height: calc(100% - 150px);
  padding: 0 15px;
  overflow: hidden;
`;
