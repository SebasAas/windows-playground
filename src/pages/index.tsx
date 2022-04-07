import { useEffect } from 'react';

// Components
import Nav from 'components/Nav';
import Main from 'components/Main';
import File from 'components/File';
import Menu from 'components/Menu';
import Folder from 'components/Folder';

export default function Home() {
  useEffect(() => {
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    return () => {
      window.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []);

  return (
    <Main>
      <Folder />
      <File />
      <Menu />
      <Nav />
    </Main>
  );
}
