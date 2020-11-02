import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expensesSelectors';
import selectExpensesTotal from '../selectors/expensesSummary';

export const ExpensesSummary = (props) => {
	const { expenseCount, expensesTotal } = props
  
	return (
		<div className="expense-info">
			<div className="container">
				<h1 className="expense-info__title">Viewing <span>{expenseCount}</span> {expenseCount === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span></h1>
				<div className="expense-info__actions">
					<Link className="button" to="/add">Add expense</Link>
				</div>
			</div>
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
