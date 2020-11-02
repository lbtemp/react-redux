import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const Dashboard = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpensesList />
        </div>
    )
}

export default Dashboard;