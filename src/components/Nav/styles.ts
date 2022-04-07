import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 45px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #000000;
  z-index: 3;
`;

export const NavMenu = styled.div`
  width: 70px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: #ffffff;
  }

  &:hover {
    svg {
      fill: #00aff0;
    }
  }
`;

export const NavClock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
`;

export const ImageIconMinimized = styled.img`
  padding: 3px 15px;
  cursor: pointer;

  &:hover {
    background: rgb(120 120 120 / 50%);
  }
`;
