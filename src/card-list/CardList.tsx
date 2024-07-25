import { FC } from 'react';
import { Meetup } from '../types/meetup';
import { MeetupList } from '../types/meetup-list';
import './CardList.css';
import Card from './card/Card';

const CardList: FC<{meetupList: MeetupList}> = ({meetupList}): JSX.Element => {

    const cards = meetupList.meetups.map((meetup: Meetup) => {

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
