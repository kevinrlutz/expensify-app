import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
	const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
	return (
		<div>
			<h3>
				Viewing {expenseCount} {expenseWord} totaling{' '}
				{formattedExpenseTotal}
			</h3>
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
