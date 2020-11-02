/*
    expensesActions.js
*/

import db from '../firebase/firebase';

export const startAddExpense = (data = {}) => {
    return (dispatch) => {
        const {amount = 0, description = '', createdAt = 0, note = ''} = data;

        const expenseToAdd = {amount, description, createdAt, note}
        db.ref('expenses')
        .push(expenseToAdd)
        .then(response => {
            console.log('response: ', response);
            dispatch(addExpense({
                id: response.key,
                ...expenseToAdd
            }))
        })
    }
}

import uuid from 'uuid';

export const addExpense = (expense) => ({type: 'ADD_EXPENSE', expense});

export const removeExpense = (id) => ({type: 'REMOVE_EXPENSE', id});

export const editExpense = (id, updates) => ({type: 'EDIT_EXPENSE', id, updates});