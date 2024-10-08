import { FC } from 'react';
import { Meetup } from '../types/meetup';
import { User } from '../types/user';
import './CardList.css';
import Card from './card/Card';

const CardList: FC<{user: User}> = ({user}): JSX.Element => {

    const cards: JSX.Element[] = user.meetups.map((meetup: Meetup) => {

        return (
            <Card
                meetup={meetup}
            />
        );
    });

    return (
        <div className='CardList'>
            {cards}
        </div>
    );
}

export default CardList;
