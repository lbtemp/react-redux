import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expensesActions';

const Edit = (props) => {
    return (
        <div>
            <div className="expenses-info">
                <div className="container">
                    <h1 className="expenses-info__title">Edit expense </h1>
                </div>
            </div>

            <div className="container">
                <ExpenseForm
                    expenseToEdit={props.expenseToEdit}
                    formSubmitted={((editedExpense) => {
                        props.dispatch(startEditExpense(props.expenseToEdit.id, editedExpense));
                        props.history.push('/dashboard');
                    })}
                    // removeExpense={() => {
                    //     props.dispatch(startRemoveExpense(props.expenseToEdit.id));
                    //     props.history.push('/dashboard');
                    // }}
                />
                <button className="button button--danger" onClick={() => {
                    props.dispatch(startRemoveExpense(props.expenseToEdit.id));
                    props.history.push('/dashboard');
                }}>Remove Expense</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const expenseToEdit = state.expenses.find(expense => {
        return expense.id === props.match.params.id
    });

    return {expenseToEdit};
}


export default connect(mapStateToProps)(Edit)