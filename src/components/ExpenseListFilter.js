import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filtersActions';
import {DateRangePicker} from 'react-dates';

class ExpenseListInputFilter extends React.Component {
    state = {
        calendarFocused: null,
    };

    handleDateSelection = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    handleFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    render() {
        return (
            <div className="container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input placeholder="Search for expense" className="text-input" value={this.props.filters.text} onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))} type="text" />
                    </div>

                    <div className="input-group__item">
                        <select
                            className="select" 
                            value={this.props.filters.sortBy}
                            onChange={(e => {
                                if (e.target.value) {
                                    if (e.target.value === 'date') {
                                        this.props.dispatch(sortByDate())
                                    } else if (e.target.value === 'amount') {
                                        this.props.dispatch(sortByAmount())
                                    }
                                }
                            })}
                        >

                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.handleDateSelection}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.handleFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListInputFilter);