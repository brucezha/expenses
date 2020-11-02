import React from 'react';
import { Button } from '@material-ui/core';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        // console.log(props.card.cardName);
        super(props);
        this.state = {
            cardName: props.card ? props.card.cardName : ''
        };
    }
    onCardNameChange = (e) => {
        const cardName = e.target.value;
        this.setState(() => ({ cardName }))
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.cardName) {
            //set error message
            this.setState(() => ({ error: 'Please enter a card name' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                cardName: this.state.cardName,
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Enter the card you want to add"
                    autoFocus
                    className="text-input"
                    value={this.state.cardName}
                    onChange={this.onCardNameChange}
                />
                <div>
                    <Button type="submit" variant="contained" style={{ fontSize: '15px' }} color="primary">Submit Card</Button>
                </div>
            </form>
        )
    }
}