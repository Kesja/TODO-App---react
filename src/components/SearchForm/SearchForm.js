import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchFeald } from '../../redux/store';


const SearchForm = () => {

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchFeald(searchString));
    setSearchString('');
  };

  useEffect(() => {
    dispatch(searchFeald(''))
  }, []);

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