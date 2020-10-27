import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal';

export class EditExpensePage extends React.Component {
  state = {
    deleteSelected: false
  };
  handleCancel = () => {
    this.props.history.push('/');
  }
  handleDelete = () => {
    this.setState(() => ({ deleteSelected: true }));
  };
  handleClearDelete = () => {
    this.setState(() => ({ deleteSelected: false }));
  };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <Button
            onClick={this.handleCancel}
            variant="contained"
            style={{ fontSize: '15px' }}
            color="default">
            Cancel
        </Button>
        &nbsp;&nbsp;&nbsp;
          <Button
            onClick={this.handleDelete}
            variant="contained"
            style={{ fontSize: '15px' }}
            color="secondary">
            Remove
          </Button>
          <DeleteModal
            deleteSelected={this.state.deleteSelected}
            handleClearDelete={this.handleClearDelete}
            remove={this.onRemove}
          />
          {/* <Button onClick={this.onRemove} variant="contained" style={{ fontSize: '15px' }} color="secondary">Remove</Button> */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);