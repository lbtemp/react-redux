import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expensesActions';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = ({expense, dispatch}) => (
    <div>
        <h3>
            <Link to={`/edit/${expense.id}`}>{expense.description}</Link>
        </h3>

        <p>
            {numeral(expense.amount / 100).format('$0,0.00')} - 
            {moment(expense.createdAt).format('MMMM Do, YYYY')}
        </p>
        {/* <button onClick={() => dispatch(removeExpense({id: expense.id}))}> Remove expense </button> */}
    </div>
)

const mapStateToProps = (state) => {{state}}

export default connect(mapStateToProps)(ExpenseItem)