import React, { useEffect } from 'react';

// Styles
import * as S from './styles';

// Store
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  openMenu,
  setTextToSearch,
  MenuTypes
} from 'store/features/menu/menuSlice';

function Searchbar() {
  const dispatch = useDispatch();
  const menu: MenuTypes = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    // first
    // return () => {
    //   second
    // }
  }, []);

  return (
    <S.Searchbar>
      <input
        placeholder="Type to search"
        onClick={() => dispatch(openMenu())}
        value={menu.searchText}
        onChange={(e) => dispatch(setTextToSearch(e.target.value))}
      />
      <span>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.90003 0.785706C13.7577 0.785706 16.9 3.67149 16.9 7.21428C16.9 10.7571 13.7577 13.6428 9.90003 13.6428C8.22247 13.6428 6.68186 13.0958 5.47444 12.1876L1.29495 16.0259C1.23045 16.0876 1.15319 16.1369 1.0677 16.1708C0.982208 16.2048 0.890203 16.2227 0.797075 16.2236C0.703947 16.2244 0.611565 16.2082 0.525341 16.1759C0.439116 16.1436 0.360783 16.0958 0.294926 16.0353C0.229071 15.9748 0.177019 15.9029 0.141815 15.8237C0.106613 15.7445 0.0889683 15.6597 0.0899162 15.5741C0.0908642 15.4886 0.110386 15.4041 0.147335 15.3256C0.184286 15.2471 0.237923 15.1761 0.305103 15.1169L4.4846 11.2786C3.49574 10.1697 2.90003 8.75489 2.90003 7.21428C2.90003 3.67149 6.04232 0.785706 9.90003 0.785706ZM9.90003 2.07142C6.79894 2.07142 4.30003 4.36634 4.30003 7.21428C4.30003 10.0622 6.79894 12.3571 9.90003 12.3571C13.0011 12.3571 15.5 10.0622 15.5 7.21428C15.5 4.36634 13.0011 2.07142 9.90003 2.07142Z"
            fill="#363636"
          />
        </svg>
      </span>
    </S.Searchbar>
  );
}

export default Searchbar;
