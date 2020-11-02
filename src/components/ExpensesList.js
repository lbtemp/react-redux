/*
    expensesList.js
*/

import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import expensesWithFilters from '../selectors/expensesSelectors';
import ExpenseListFilter from './ExpenseListFilter'

const ExpensesList = (props) => (
	<div className="container">
		<ExpenseListFilter />

		<div className="list-header">
			<div className="for-mobile">Expenses</div>
			<div className="for-desktop">Expense</div>	
			<div className="for-desktop">Amount</div>	
		</div>

		{
			props.expenses.length > 0
			? props.expenses.map((expense, index) => <ExpenseItem key={index} expense={expense} /> )
			: <div className="list-item list-item__message"> <span>So empty.. such oreos.. no expenses.. wow</span> </div>
		}
	</div>
)

const mapStateToProps = (state) => {
	return {
		expenses: expensesWithFilters(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(ExpensesList)