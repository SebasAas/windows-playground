import SortableList from 'react-easy-sort';
import styled from 'styled-components';

export const List = styled(SortableList)`
  user-select: none;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;

  @media (min-width: 980px) {
    grid-gap: 16px;
  }
`;

export const Item = styled.div<{ image: string | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 90px;
  width: 90px;
  border-radius: 3px;
  cursor: grab;
  font-size: 20px;
  user-select: none;
  z-index: 3;
  background: url(${(props) => props.image});
  background-color: rgba(232, 232, 232, 0.05);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
`;
