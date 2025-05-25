import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { useCallback } from 'react';
import debounce from 'lodash/debounce';
import { setFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();

  const debouncedDispatch = useCallback(
    debounce((value) => {
      dispatch(setFilter(value));
    }, 700),
    [dispatch],
  );

  const handleSearch = (evt) => {
    debouncedDispatch(evt.target.value.trim());
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" className={css.filter} onChange={handleSearch} />
    </div>
  );
}
