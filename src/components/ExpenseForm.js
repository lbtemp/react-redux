import React from 'react';

import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			description: props.expenseToEdit ? props.expenseToEdit.description : '',
			note: props.expenseToEdit ? props.expenseToEdit.note : '',
			amount: props.expenseToEdit ? (props.expenseToEdit.amount / 100).toString() : '',
			createdAt: props.expenseToEdit && props.expenseToEdit.createdAt ? moment(this.props.expenseToEdit.createdAt) : moment(),
			calendarFocused: false,
			error: ''
		};
	}

	handleDescriptionInput = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};
	handleNoteInput = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	handleAmountInput = (e) => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		  }
	};
	handleDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		  }
	};
	handleFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Description and amount are required fields.' }));
		} else {
			this.setState(() => ({ error: '' }));

			const toSave = {
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			}

			this.props.formSubmitted(toSave);
		}
	};
	// handleRemoveExpense = () => this.props.removeExpense();

	render() {
		return (
				<form className="form" onSubmit={this.handleFormSubmit}>
					{
						this.state.error && <p className="form__error"><b>{this.state.error}</b></p>
					}

					<input
						className="text-input"
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.handleDescriptionInput}
					/>

					<input
						className="text-input"
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.handleAmountInput}
					/>

					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.handleDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.handleFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>

					<textarea
						className="textarea"
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.handleNoteInput}
					>
					</textarea>

					<div>
						<button className="button">Add Expense</button>
					</div>
				</form>


		)
	}
}
