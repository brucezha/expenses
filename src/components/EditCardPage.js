import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
// import { startEditCard, startRemoveExpense } from '../actions/cards';
import { startEditCard } from '../actions/cards';
import CardForm from './CardForm';
import DeleteModal from './DeleteModal';

export class EditCardPage extends React.Component {
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
  onSubmit = (card) => {
    this.props.startEditCard(this.props.card.id, card);
    this.props.history.push('/manage');
  };
//   onRemove = () => {
//     this.props.startRemoveExpense({ id: this.props.expense.id });
//     this.props.history.push('/');
//   }
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Card</h1>
          </div>
        </div>
        <div className="content-container">
          <CardForm
            card ={this.props.card}
            onSubmit={this.onSubmit}
          />
          {/* 
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
          */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  card: state.cards.find((card) => card.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditCard: (id, card) => dispatch(startEditCard(id, card)),
//   startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCardPage);