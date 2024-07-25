import { FC } from 'react';
import { Meetup } from '../../types/meetup';
import './Card.css'

const Card: FC<{meetup: Meetup}> = ({meetup}): JSX.Element => {

    console.log(meetup);
    
    return (
        <div className='Card'>
            {meetup.person.name}
            <br />
            {meetup.person.age}
        </div>
    );
}

export default Card;
