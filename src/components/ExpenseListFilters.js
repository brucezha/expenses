import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setCardFilter, setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';
import { v4 as uuidv4 } from 'uuid';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
        startDateId: uuidv4(),
        endDateId: uuidv4()
    };
    onCardChange = (e) => {
        this.props.setCardFilter(e.target.value);
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSelectChange = (e) => {
        this.props.setSelect(e.target.value);
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search Expenses"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            onChange={this.onSelectChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <select
                            className="select"
                            onChange={this.onCardChange}>
                            <option value="">All Cards</option>
                            {this.props.cards.map((card) => <option key={card.id} value={card.cardName}>{card.cardName}</option>)}
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                            startDateId={this.state.startDateId}// PropTypes.string.isRequired,
                            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                            endDateId={this.state.endDateId} // PropTypes.string.isRequired,
                            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>



            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters,
    expenses: state.expenses,
    cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
    setCardFilter: (cardName) => dispatch(setCardFilter(cardName)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setSelect: (selected) => dispatch(selected === "date" ? sortByDate() : sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);