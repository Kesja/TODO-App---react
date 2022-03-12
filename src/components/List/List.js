import { useEffect } from 'react';
import { useState } from 'react';
import styles from './List.module.scss';
import Columns from '../Columns/Columns';

const List = () => {

  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' }
  ]);

 /* setTimeout(() => {
    setColumns([...columns, { id: 4, title: 'Test column'}]);
  }, 2000);

  useEffect(() => {
    console.log('Columns have changed');
}, [columns]);*/

    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>Things to do<span>soon</span></h2>
          <p className={styles.description}>Interesting things I want to check out</p>
        </header>
        <section className={styles.columns}>
          {columns.map(column => <Columns key={column.id} title={column.title} icon={column.icon} />)}
        </section>
      </div>
    )
}

export default List;