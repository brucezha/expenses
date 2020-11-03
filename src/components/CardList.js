import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import CardListItem from './CardListItem';
import { Link } from 'react-router-dom'
// import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Manage Cards</h1>
                <div className="page-header__actions">
                    <Button component={Link} to="/addCard" variant="contained" style={{ fontSize: '15px', textTransform: 'none' }} color="primary">Add A New Card</Button>
                </div>
            </div>
        </div>
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-desktop">Card</div>
                <div className="show-for-desktop">Posted Charges</div>
            </div>
            <div className="list-body">
                {
                    props.cards.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No card to show</span>
                        </div>
                    ) : (
                            props.cards.map((card) => {
                                return <CardListItem key={card.id} {...card} />
                            })
                        )
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        cards: state.cards
    };
};

export default connect(mapStateToProps)(ExpenseList);