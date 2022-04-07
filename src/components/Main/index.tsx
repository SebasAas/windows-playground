import { useState, useEffect, useRef } from 'react';

// Components
import Modal from 'components/Modal';

// Styles
import * as S from './styles';

// Store
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  createFile,
  ApplicationsTypes
} from 'store/features/applications/applicationsSlice';
import {
  ModalTypes,
  openModalOption,
  closeModalOption,
  openModalCreateFolder,
  closeModalCreateFolder
} from 'store/features/modal/modalSlice';

// Hooks
import useOnClickOutside from 'hooks/useOnClickOutside';

type PropsMain = {
  children?: JSX.Element | JSX.Element[];
};

function Main({ children }: PropsMain) {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLElement>(null);
  const applications: ApplicationsTypes[] = useSelector(
    (state: RootState) => state.applications
  );
  const modal: ModalTypes = useSelector((state: RootState) => state.modal);

  const {
    showModalOption: isModalOptionOpen,
    showModalCreateFolder: isModalCreateFolderOpen
  } = modal;

  const [folderName, setFolderName] = useState('');
  const [coordinates, setCoordinates] = useState({ posx: 0, posy: 0 });

  useEffect(() => {
    window.addEventListener('contextmenu', (e) => handleModalOption(e));
    // window.addEventListener('click', () => closeModalOption());
    return () => {
      window.removeEventListener('contextmenu', (e) => handleModalOption(e));
      // window.removeEventListener('click', () => closeModalOption());
    };
  }, []);

  const handleModalOption = (e: any) => {
    setCoordinates({ posx: e.clientX, posy: e.clientY });
    dispatch(openModalOption());
  };

  const handleCreateFolder = () => {
    dispatch(closeModalOption());
    dispatch(openModalCreateFolder());
  };

  const handleCreateObject = () => {
    const obj = {
      id: applications[applications.length - 1].id + 1,
      name: folderName,
      type: 'folder',
      image: '/img/folder.png',
      location: 'desktop',
      options: {
        show: false,
        minimize: false,
        maximize: false,
        details: {
          files: []
        }
      }
    };

    dispatch(createFile(obj));
  };

  useOnClickOutside(modalRef, closeModalOption(), 'MAIN');

  const handleModalOptions = () => {
    if (isModalOptionOpen)
      return (
        <Modal
          draggable={false}
          coordinates={coordinates}
          onClose={() => dispatch(closeModalOption())}
          innerRef={modalRef}
        >
          <S.Button onClick={() => handleCreateFolder()}>
            Create Folder
          </S.Button>
          <S.Button>Properties</S.Button>
        </Modal>
      );
  };

  const handleModalCreateFolder = () => {
    if (isModalCreateFolderOpen)
      return (
        <Modal
          coordinates={{ posy: 150, posx: 400 }}
          size={{ height: 'auto', width: '400px' }}
          onClose={() => dispatch(closeModalCreateFolder())}
        >
          <S.CreateFolderWrapper>
            <h1>Create Folder</h1>
            <input
              type="text"
              placeholder="Folder Name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
            <button onClick={() => handleCreateObject()}>Create</button>
          </S.CreateFolderWrapper>
        </Modal>
      );
  };

  return (
    <S.Wrapper>
      {handleModalOptions()}
      {handleModalCreateFolder()}
      {children}
    </S.Wrapper>
  );
}

export default Main;
