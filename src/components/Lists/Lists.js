import styles from './Lists.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getAllLists } from "../../redux/listsRedux";
import { Link } from "react-router-dom";
import { addList } from '../../redux/listsRedux';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';


const Lists = props => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const lists = useSelector(state => getAllLists(state, props.lists));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId: props.listId }));
    setTitle('');
    setDescription('');
  };

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map(list => (
        <Link key={list.id} to={"/list/" + list.id} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}
      <form onSubmit={handleSubmit} className={styles.columnForm}>
        <label>Title:</label><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <label>description:</label><TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add list</Button>
      </form>
    </section>
  );
};

export default Lists;