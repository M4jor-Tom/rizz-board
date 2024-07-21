import './CardList.css';
import Card from './card/Card';

function CardList() {

    let cards = (
        <Card />
    );

    return (
        <div className='CardList'>
            {cards}
        </div>
    );
}

export default CardList;
