import React from 'react';
import {connect} from 'react-redux';
import {startRemoveExpense} from '../actions/expensesActions';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = ({expense, dispatch}) => (
    <Link className="list-item" to={`/edit/${expense.id}`}>
        <div>
            <h3 className="list-item__title">{expense.description}</h3>
            <span className="list-item_subtitle">{moment(expense.createdAt).format('MMMM Do, YYYY')}</span>
        </div>

        <h3 className="list-item__amount">
            {numeral(expense.amount / 100).format('$0,0.00')}
        </h3>

        {/* <button onClick={() => dispatch(startRemoveExpense({id: expense.id}))}> Remove expense </button> */}
    
    </Link>
)

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(ExpenseItem)