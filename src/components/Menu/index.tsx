import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Components
import Shortcuts from '../ShortcutList';

// Styles
import * as S from './styles';

// Store
import { RootState } from 'store/store';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileTypes } from 'store/features/profile/profileSlice';
import { MenuTypes, closeMenu } from 'store/features/menu/menuSlice';
import {
  ApplicationsTypes,
  openFile
} from 'store/features/applications/applicationsSlice';

// Hooks
import useOnClickOutside from 'hooks/useOnClickOutside';

function Menu() {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  const menu: MenuTypes = useSelector((state: RootState) => state.menu);
  const applications: ApplicationsTypes[] = useSelector(
    (state: RootState) => state.applications
  );
  const profile: ProfileTypes = useSelector(
    (state: RootState) => state.profile
  );

  const [filteredApps, setApplicationFiltered] = useState(applications);

  const { show: isOpen, searchText } = menu;

  useEffect(() => {
    handleSearch();
    return handleSearch();
  }, [searchText]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { y: '-845px' });
    }
  }, [isOpen]);

  useOnClickOutside(menuRef, closeMenu(), 'MAIN');

  const handleOpenFileFromMenu = (id: number) => {
    dispatch(openFile(id));
    dispatch(closeMenu());
  };

  const handleSearch = () => {
    const value = searchText.toLowerCase();
    let result = [];
    result = applications.filter((data) => {
      return data.name.toLowerCase().search(value) != -1;
    });
    setApplicationFiltered(result);
  };

  const layoutFilteredTech = () => {
    return filteredApps
      .filter((app) => app.location === 'menu' && app.type === 'technology')
      .map((app, index) => (
        <div
          key={index}
          onClick={() => handleOpenFileFromMenu(app.id)}
          onTouchStart={() => handleOpenFileFromMenu(app.id)}
        >
          <img src={app.image} alt={`Button to execute ${app.name}`} />
          <h2>{app.name}</h2>
        </div>
      ));
  };

  const layoutFilteredApps = () => {
    return filteredApps
      .filter((app) => app.location === 'menu' && app.type === 'application')
      .map((app, index) => (
        <div
          key={index}
          onClick={() => handleOpenFileFromMenu(app.id)}
          onTouchStart={() => handleOpenFileFromMenu(app.id)}
        >
          <img src={app.image} alt={`Button to execute ${app.name}`} />
          <h2>{app.name}</h2>
        </div>
      ));
  };

  return isOpen ? (
    <S.Menu ref={menuRef}>
      <S.MenuAplication>
        <S.Options>
          <S.HamburgerIcon src="/img/hamburger-icon.svg" alt="Hamburger Icon" />
          <S.TurnOffIcon src="/img/turn-off-icon.svg" alt="Turn Off Icon" />
        </S.Options>
        <S.Applications>
          <h1>Recent Apps</h1>
          {layoutFilteredApps()}
          <h1>Technologies</h1>
          {layoutFilteredTech()}
        </S.Applications>
      </S.MenuAplication>
      <S.MenuShortcut>
        <S.Profile>
          <img src={profile.image} alt={profile.name} />
          <p>{profile.name}</p>
          <p>{profile.email}</p>
        </S.Profile>
        <S.Shortcuts>
          <Shortcuts />
        </S.Shortcuts>
      </S.MenuShortcut>
    </S.Menu>
  ) : (
    <></>
  );
}

export default Menu;
