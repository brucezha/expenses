import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    if (expensesCount === 0) {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">There isn't anything to show</h1>
                    <div className="page-header__actions">
                        <Button component={ Link } to="/create" variant="contained" style={{ fontSize: '15px'}} color="primary">Add Expense </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
        const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                    <div className="page-header__actions">
                        <Button component={ Link } to="/create" variant="contained" style={{ fontSize: '15px'}} color="primary">Add Expense </Button>
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
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);