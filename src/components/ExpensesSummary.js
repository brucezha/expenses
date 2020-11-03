import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal, expensesCountNoFilter }) => {
    if (expensesCount === 0) {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">There isn't anything to show</h1>
                    <div className="page-header__actions">
                        <Button component={Link} to="/create" variant="contained" style={{ fontSize: '15px', textTransform: 'none' }} color="primary">Add Expense </Button>
                        &nbsp;&nbsp;
                        <Button component={Link} to="/manage" variant="contained" style={{ fontSize: '15px', textTransform: 'none' }} color="primary">Manage Cards</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        const expenseWord = expensesCountNoFilter === 1 ? 'transaction' : 'transactions';
        const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Showing <span>{expensesCount}</span> out of <span>{expensesCountNoFilter}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                    <div className="page-header__actions">
                        <Button component={Link} to="/create" variant="contained" style={{ fontSize: '15px', textTransform: 'none' }} color="primary">Add Transaction</Button>
                        &nbsp;&nbsp;
                        <Button component={Link} to="/manage" variant="contained" style={{ fontSize: '15px', textTransform: 'none' }} color="primary">Manage Cards</Button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesCountNoFilter: state.expenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);