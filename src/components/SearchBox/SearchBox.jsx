import { changeFilter } from '../../redux/filtersSlice';

import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    const filterValue = e.target.value.trim();
    dispatch(changeFilter(filterValue));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}
