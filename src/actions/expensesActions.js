/*
    expensesActions.js
*/

import uuid from 'uuid';

export const addExpense = ({id = uuid(), amount = 0, description = '', createdAt = 0, note = ''} = {}) => ({type: 'ADD_EXPENSE', expense: {id, amount, description, createdAt, note}});

export const removeExpense = (id) => ({type: 'REMOVE_EXPENSE', id});

export const editExpense = (id, updates) => ({type: 'EDIT_EXPENSE', id, updates});