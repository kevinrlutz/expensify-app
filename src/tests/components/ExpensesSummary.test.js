import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render ExpensesSummary for no expenses correctly', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={1} expensesTotal={235} />
	)
	expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary for one expense correctly', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={23} expensesTotal={1520002} />
	)
	expect(wrapper).toMatchSnapshot()
})
