import { SortableItem } from 'react-easy-sort';
import { useState } from 'react';
import arrayMove from 'array-move';

// Store
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { ApplicationsTypes } from 'store/features/applications/applicationsSlice';

// Styles
import * as S from './styles';

export default function ShortcutList() {
  const apps: ApplicationsTypes[] = useSelector(
    (state: RootState) => state.applications
  );
  const [items, setItems] = useState(
    apps.filter((app) => app.location === 'menu')
  );

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  return (
    <S.List onSortEnd={onSortEnd} draggedItemClassName="dragged">
      {items.slice(0, 6).map(({ imageSmall }, key) => (
        <SortableItem key={key}>
          <S.Item image={imageSmall} />
        </SortableItem>
      ))}
    </S.List>
  );
}
