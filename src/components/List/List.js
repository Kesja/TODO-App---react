import styles from './List.module.scss';
import Columns from '../Columns/Columns';

const List = () => {
    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>Things to do<span>soon</span></h2>
          <p className={styles.description}>Interesting things I want to check out</p>
        </header>
        <section className={styles.columns}>
          <Columns title="Books" icon="book" />
          <Columns title="Movies" icon="film"/>
          <Columns title="Games" icon="gamepad"/>
        </section>
      </div>
    )
}

export default List;