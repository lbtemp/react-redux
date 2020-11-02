import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expensesActions';
import {Link} from 'react-router-dom';

const ExpenseItem = ({expense, dispatch}) => (
    <div>
        <h3>
            <Link to={`/edit/${expense.id}`}>{expense.description}</Link>
        </h3>

        <p>{expense.amount} - {expense.createdAt}</p>
        {/* <button onClick={() => dispatch(removeExpense({id: expense.id}))}> Remove expense </button> */}
    </div>
)

const mapStateToProps = (state) => {{state}}

export default connect(mapStateToProps)(ExpenseItem)