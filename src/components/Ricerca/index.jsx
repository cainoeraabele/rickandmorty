
import "./Style.css";
import { appActions } from '../../reducers/appSlice';
import { useSelector, useDispatch } from 'react-redux';



const SearchBar = ({placeholder}) => {
  const dispatch = useDispatch();
  const { filter  } = useSelector((state) => state.app);

  
  return (
    <div className="searchBox">
        <input
            className="search-input"
            type="text"
            placeholder={placeholder}
            value={filter}
            onChange={(e) => dispatch(appActions.setFilter(e.target.value))}
          />
    </div>
  )
}
/*
const ClearButton = ({ onClick }) => (
    <IconButton size='small' onClick={onClick} sx={{ p: 0.5, m: 0.5, color: 'primary.contrastText' }}>
        <ClearIcon fontSize='small' />
    </IconButton>
);*/

export default SearchBar;