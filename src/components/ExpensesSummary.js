import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
	const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
	return (
		<div className="page-header">
			<div className="content-container">
				<h2 className="page-header__title">
					Viewing <span>{expenseCount}</span> {expenseWord} totaling{' '}
					<span>{formattedExpenseTotal}</span>
				</h2>
				<div className="page-header__actions">
					<Link className="button" to="/create">
						Add Expense
					</Link>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters)

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
	}
}

export default connect(mapStateToProps)(ExpensesSummary)
