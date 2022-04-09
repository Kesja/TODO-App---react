import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchFeald } from '../../redux/searchStringRedux';
import { useLocation } from 'react-router-dom';


const SearchForm = () => {

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchFeald(searchString));
    setSearchString('');
  };
  
  useEffect(() => {
    if (location.pathname === "/" ) {
    dispatch(searchFeald(''))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput onChange={e => setSearchString(e.target.value)} value={searchString}  placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;