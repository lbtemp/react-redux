import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expensesSelectors';
import selectExpensesTotal from '../selectors/expensesSummary';

export const ExpensesSummary = (props) => {
	const { expenseCount, expensesTotal } = props
  
	return (
		<div>
			<h1>Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
  	const visibleExpenses = selectExpenses(state.expenses, state.filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
