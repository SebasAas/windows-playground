// Components
import Draggable from 'react-draggable';

// Styles
import * as S from './styles';

// Icons
import CrossIcon from 'styles/svg/CrossIcon';
import LineIcon from 'styles/svg/LineIcon';
import SquareIcon from 'styles/svg/SquareIcon';

// Store
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';

import {
  ApplicationsTypes,
  FilesInFolderTypes,
  closeFile,
  minimizeFile,
  maximizeFile
} from 'store/features/applications/applicationsSlice';

function Folder() {
  const dispatch = useDispatch();
  const applications: ApplicationsTypes[] = useSelector(
    (state: RootState) => state.applications
  );

  const layoutDataInFile = (app: ApplicationsTypes) => {
    if (app.type === 'folder') {
      if (app.options.details.files?.length === 0)
        return (
          <S.EmptyFolder>
            <p>Empty Folder</p>
          </S.EmptyFolder>
        );

      return (
        <S.Files>
          {app.options.details.files?.map((file: FilesInFolderTypes) => (
            <div key={app.id}>
              <img
                src={`/img/${file.type}.png`}
                alt={`Icon ${file.title} - Call To Action - Open ${file.title}`}
              />
              <p>{file.title}</p>
            </div>
          ))}
        </S.Files>
      );
    } else if (app.type === 'application' || app.type === 'technology') {
      return (
        <S.Application>
          <h1>{app.options.details.title}</h1>
          <img src={app.options.details.image} alt="" />
          <p>{app.options.details.text}</p>
        </S.Application>
      );
    }
  };

  return (
    <>
      {applications.map((app) => {
        return (
          app?.options?.show && (
            <Draggable
              key={app.id}
              handle="span"
              // TODO: Check behavior on maximize passing middle the screen
              position={app.options.maximize ? { x: -180, y: -60 } : undefined}
            >
              <S.Box
                style={
                  app.options.maximize
                    ? {
                        height: 'calc(100% - 45px)',
                        width: '100%'
                      }
                    : { height: '520px', width: '700px' }
                }
              >
                <S.Span>
                  <div className={app.name}>
                    <div>
                      <p>{app.name}</p>
                    </div>
                    <div>
                      <span onClick={() => dispatch(minimizeFile(app.id))}>
                        <LineIcon />
                      </span>
                      <span onClick={() => dispatch(maximizeFile(app.id))}>
                        <SquareIcon />
                      </span>
                      <span onClick={() => dispatch(closeFile(app.id))}>
                        <CrossIcon />
                      </span>
                    </div>
                  </div>
                </S.Span>
                <S.Details>
                  <div>{layoutDataInFile(app)}</div>
                </S.Details>
              </S.Box>
            </Draggable>
          )
        );
      })}
    </>
  );
}

export default Folder;
