import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Button } from '@material-ui/core';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        // console.log(props.cards.map((card) => card.cardName));
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            card: props.expense ? props.expense.card : '',
            cards: props.cards ? props.cards : undefined,
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        };
    }
    onCardChange = (e) => {
        const card = e.target.value;
        this.setState(() => ({ card }))
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };
    OnAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount, error: '' }));
        } else {
            this.setState(() => ({ error: 'Enter a valid amount please' }))
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            //set error message
            this.setState(() => ({ error: 'Both description and amount are required' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                card: this.state.card,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <select
                    className="select"
                    onChange={this.onCardChange}>
                    <option value={this.state.card}>{this.state.card}</option>
                    {
                        this.state.cards.map((card) =>
                            <option key={card.id} value={card.cardName}>
                                {card.cardName}
                            </option>)
                    }
                </select>
                {/*
                    <input
                        type="text"
                        placeholder="Card"
                        className="text-input"
                        value={this.state.card}
                        onChange={this.onCardChange}
                    />
                    */}
                <input
                    type="number"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.OnAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={createdAt => { if (createdAt) { this.setState({ createdAt }) } }} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    //id={this.state.id} // PropTypes.string.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <Button type="submit" variant="contained" style={{ fontSize: '15px' }} color="primary">Sumbit Expense</Button>
                </div>
            </form>
        )
    }
}