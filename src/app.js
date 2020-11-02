import 'normalize.css/normalize.css';
import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

// Routes
import AppRoutes, {history} from './routes/AppRoutes';

// Redux store
import configureStore from './store/expensesStore';

// Redux actions
import {addExpense, startSetExpenses} from './actions/expensesActions'
import {setTextFilter, sortByAmount} from './actions/filtersActions'
import {login, logout} from './actions/authActions'

// DB
import {firebase} from './firebase/firebase';

// SET STORE
const store = configureStore();

//ADD
// store.dispatch(addExpense({amount: 5000, description: 'rent', createdAt: 212122}))
// store.dispatch(addExpense({amount: 3500, description: 'food', createdAt: 650}))
// store.dispatch(addExpense({amount: 22500, description: 'car', createdAt: 1550}))

// LOG STATE
// const __state = store.getState()
// console.log('APP __state: ', __state);

const jsx = (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

let hasRendered = false;
const render = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses())
            .then(() => {
                render();

                if (history.location.pathname === '/') {
                    history.push('/dashboard')
                }
            })
            .catch(e => {
                console.log('FETCH err: ', e);
            })
    } else {
        store.dispatch(logout())
        render()
        history.push('/')
    }
})