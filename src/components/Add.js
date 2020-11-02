import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expensesActions';

const Add = (props) => {
    return (
        <div>
            <h2>What'd ya splurge on ?</h2>

            <ExpenseForm 
                formSubmitted={((addedExpense) => {
                    props.dispatch(addExpense(addedExpense))
                    props.history.push('/')
                })}
            />
        </div>
    )
}

export default connect()(Add);