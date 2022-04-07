// Styles
import * as S from './styles';

// Store
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import { openFile } from 'store/features/applications/applicationsSlice';

function File() {
  const applications = useSelector((state: RootState) => state.applications);
  const dispatch = useDispatch();

  return (
    <>
      {applications
        .filter((app) => app.location === 'desktop')
        .map(({ id, name: text, type, image }) => (
          <S.FileMinature
            key={id}
            onDoubleClick={() => dispatch(openFile(id))}
            onTouchStart={() => dispatch(openFile(id))}
          >
            <S.FileImage
              id={text}
              src={image}
              alt={`Icon ${text} - Call To Action`}
            />
            <S.FileText>{text}</S.FileText>
          </S.FileMinature>
        ))}
    </>
  );
}

export default File;
