import { RefObject } from 'react';
import Draggable from 'react-draggable';

// Icons
import CrossIcon from 'styles/svg/CrossIcon';
import LineIcon from 'styles/svg/LineIcon';
import SquareIcon from 'styles/svg/SquareIcon';

// Styles
import * as S from './styles';

type ModalProps = {
  children?: JSX.Element | JSX.Element[];
  coordinates?: {
    posx: number;
    posy: number;
  };
  size?: {
    height: number | string;
    width: number | string;
  };
  resize?: string;
  draggable?: boolean;
  onClose: () => void;
  innerRef?: RefObject<HTMLElement>;
};

function Modal({
  children,
  coordinates = { posx: 0, posy: 0 },
  size = { height: 'auto', width: 'auto' },
  resize = 'none',
  draggable = true,
  onClose
}: ModalProps) {
  return (
    <Draggable handle="span">
      <S.ModalWrapper coordinates={coordinates} size={size} resize={resize}>
        {draggable ? (
          <S.Span>
            <div>
              <span>
                <LineIcon />
              </span>
              <span>
                <SquareIcon />
              </span>
              <span onClick={() => onClose()}>
                <CrossIcon />
              </span>
            </div>
          </S.Span>
        ) : (
          <></>
        )}
        {children}
      </S.ModalWrapper>
    </Draggable>
  );
}

export default Modal;
