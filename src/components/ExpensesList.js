/*
    expensesList.js
*/

import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import expensesWithFilters from '../selectors/expensesSelectors';
import ExpenseListFilter from './ExpenseListFilter'

const ExpensesList = (props) => (
	<div>
		<ExpenseListFilter />
		<h2>This is expenses</h2>

		{
			props.expenses.length > 0 && 
			props.expenses.map((expense, index) => <ExpenseItem key={index} expense={expense} /> )
		}
	</div>
)

const connectExnepsesList = (state) => {
	return {
		expenses: expensesWithFilters(state.expenses, state.filters)
	}
}

export default connect(connectExnepsesList)(ExpensesList)