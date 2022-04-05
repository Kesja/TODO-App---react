import styles from './Card.module.scss'
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favoriteClass } from '../../redux/store';

const Card = props => {
  
  const dispatch = useDispatch();

  const toggleClass = (cardId) => {
    dispatch(favoriteClass(cardId))
  }


  return (
    <li className={styles.card}>{props.title}
      <div>
        <button type='button' className={clsx(styles.button, props.isFavorite && styles.active)} onClick={() => toggleClass(props.id, props.isFavorite)}>
        <span className='fa fa-star-o' />
        </button>
      </div>
    </li>
  );
};

export default Card;