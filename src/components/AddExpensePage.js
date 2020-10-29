import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                        cards={this.props.cards}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    cards: state.expenses.map(expense => expense.card)
  });

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);