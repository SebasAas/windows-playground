import styled from 'styled-components';

type CoordsProps = {
  posx: number;
  posy: number;
};

type SizeProps = {
  height: number | string;
  width: number | string;
};

export const ModalWrapper = styled.div<{
  coordinates: CoordsProps;
  size: SizeProps;
  resize: string;
}>`
  position: absolute;
  top: ${(props) => `${props.coordinates.posy}px`};
  left: ${(props) => `${props.coordinates.posx}px`};
  height: ${(props) => `${props.size.height}`};
  width: ${(props) => `${props.size.width}`};
  background-color: white;
  border-radius: 3px;
  float: left;
  z-index: 2;
  cursor: auto;
  resize: ${(props) => `${props.resize}`};
  overflow: hidden;
`;

export const Span = styled.span`
  cursor: move;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px;
    width: 100%;
    height: 35px;
    background: rgba(255, 255, 255, 0.95);
    /* backdrop-filter: blur(4px); */

    span {
      height: 25px;
      width: 12px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
    }
  }
`;
