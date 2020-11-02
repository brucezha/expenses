import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const CardListItem = ({ id, cardName }) => (
    <Link className="list-item" to={`/cards/${id}`}>
        <div>
            <h3 className="list-item__title">{cardName}</h3>
        </div>
        {/*
        <h3 className="list-item__data"> {card} </h3>
        <h3 className="list-item__data"> {numeral(amount / 100).format('$0,0.00')} </h3>
        */}
    </Link>
);

export default CardListItem;