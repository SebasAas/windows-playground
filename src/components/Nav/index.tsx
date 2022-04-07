import { useCallback } from 'react';

// Components
import Clock from '../Clock';
import Searchbar from '../Searchbar';

// Styles
import * as S from './styles';

// Store
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import { showMenu } from 'store/features/menu/menuSlice';
import {
  showFile,
  ApplicationsTypes
} from 'store/features/applications/applicationsSlice';

function Nav() {
  const dispatch = useDispatch();
  const applications: ApplicationsTypes[] = useSelector(
    (state: RootState) => state.applications
  );

  const getFoldersOpen = useCallback(() => {
    const foldersOpen = applications.filter(
      (app) => app?.options?.minimize === true
    );
    return foldersOpen;
  }, [applications]);

  const layoutFolders = () => {
    const folders = getFoldersOpen();

    return folders.map(({ id, type, name: text, image }) => (
      <S.ImageIconMinimized
        key={id}
        src={image}
        alt={`Icon ${text} - Call To Action - Open ${text}`}
        onClick={() => dispatch(showFile(id))}
      />
    ));
  };

  return (
    <S.Nav>
      <S.NavMenu onClick={() => dispatch(showMenu())}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="22px"
          height="22px"
          viewBox="0 0 25 25"
          version="1.1"
        >
          <g id="surface1">
            <path d="M 0 3.523438 L 10.136719 2.140625 L 10.144531 11.921875 L 0.0078125 11.980469 Z M 10.132812 13.046875 L 10.140625 22.835938 L 0.0078125 21.441406 L 0.0078125 12.984375 Z M 11.363281 1.960938 L 24.804688 0 L 24.804688 11.796875 L 11.363281 11.902344 Z M 24.808594 13.140625 L 24.804688 24.886719 L 11.363281 22.988281 L 11.34375 13.117188 Z M 24.808594 13.140625 " />
          </g>
        </svg>
      </S.NavMenu>
      <Searchbar />
      {layoutFolders()}
      <S.NavClock>
        <Clock />
      </S.NavClock>
    </S.Nav>
  );
}

export default Nav;
