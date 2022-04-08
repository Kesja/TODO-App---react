import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'
import Card from '../Card/Card';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Favorite = () => {

  const favoriteCard = useSelector(getFavoriteCards);

  if (favoriteCard.length === 0) 
    return (
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>There is no card!</p>
        <Link to='/'>
          <Button>Go to main page</Button>
        </Link>
      </div>
    );

	return (
		<div className={styles.favorite}>
			<PageTitle>Favorite</PageTitle>
			<div className={styles.column}>
        <ul className={styles.cards}>
        {favoriteCard.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} /> )}
        </ul>
      </div>
		</div>
	);
};

export default Favorite;