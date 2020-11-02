import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import './firebase/firebase';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

// Routes
import AppRoutes from './routes/AppRoutes';

// Redux store
import configureStore from './store/expensesStore';

// Redux actions
import {addExpense} from './actions/expensesActions'
import {setTextFilter, sortByAmount} from './actions/filtersActions'

// SET STORE
const store = configureStore();

//ADD
store.dispatch(addExpense({amount: 5000, description: 'rent', createdAt: 212122}))
store.dispatch(addExpense({amount: 3500, description: 'food', createdAt: 650}))
store.dispatch(addExpense({amount: 22500, description: 'car', createdAt: 1550}))

// LOG STATE
const __state = store.getState()
console.log('APP __state: ', __state);

const jsx = (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));