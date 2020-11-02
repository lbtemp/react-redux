import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expensesActions';

const Edit = (props) => {
    return (
        <div>
            <p>Edit item with ID: <b> {props.match.params.id} </b></p>

            <ExpenseForm
                expenseToEdit={props.expenseToEdit}
                formSubmitted={((editedExpense) => {
                    props.dispatch(startEditExpense(props.expenseToEdit.id, editedExpense));
                    props.history.push('/');
                })}
                removeExpense={() => {
                    props.dispatch(startRemoveExpense(props.expenseToEdit.id));
                    props.history.push('/');
                }}
            />
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