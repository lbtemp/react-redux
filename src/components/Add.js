import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expensesActions';

const Add = (props) => {
    return (
        <div>
            <div className="expense-info">
                <div className="container">
                    <h1 className="expense-info__title">What'd ya splurge on ?</h1>
                </div>
            </div>

            <div className="container">
                <ExpenseForm 
                    formSubmitted={((addedExpense) => {
                        props.dispatch(startAddExpense(addedExpense))
                        props.history.push('/dashboard')
                    })}
                />
            </div>
        </div>
    )
}

export default connect()(Add);