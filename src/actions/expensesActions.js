/*
    expensesActions.js
*/

import db from '../firebase/firebase';
import { database } from 'firebase';

export const startAddExpense = (data = {}) => {
    return (dispatch) => {
        const {amount = 0, description = '', createdAt = 0, note = ''} = data;

        const expenseToAdd = {amount, description, createdAt, note}
        db.ref('expenses')
        .push(expenseToAdd)
        .then(response => {
            const exp = {id: response.key,...expenseToAdd}
            dispatch(addExpense(exp))
        })
        .catch(e => {
            console.log('add err: ', e);
        })
    }
}

export const startSetExpenses = () => {
    return (dispatch) => {
        const expenses = []
        return  db.ref('expenses')
            .once('value')
            .then(response => {
                response.forEach(item => {
                    expenses.push({
                        id:item.key, ...item.val()
                    })
                })

                dispatch(setExpenses(expenses))
            })
            .catch(e => {
                console.log('fetch err: ', e);
            })
    }
}

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        db.ref(`expenses/${id}`)
        .remove()
        .then(response => {
            dispatch(removeExpense(id))
        })
        .catch(e => {
            console.log('remove err: ', e);
        })
    }
}

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return db.ref(`expenses/${id}`)
            .update(updates)
            .then(response => {
                dispatch(editExpense(id, updates))
            })
            .catch(e => {
                console.log('update err: ', e);
            })
    }
}

export const setExpenses = (expenses) => ({type: 'SET_EXPENSES', expenses})

export const addExpense = (expense) => ({type: 'ADD_EXPENSE', expense});

export const removeExpense = (id) => ({type: 'REMOVE_EXPENSE', id});

export const editExpense = (id, updates) => ({type: 'EDIT_EXPENSE', id, updates});