import React from 'react';
import { Link } from 'react-router-dom';

const CardListItem = ({ id, cardName }) => (
    <Link className="list-item" to={`/cards/${id}`}>
        <div>
            <h3 className="list-item__title">{cardName}</h3>
        </div>
    </Link>
);

export default CardListItem;