export default (expenses) => {
	let total = 0
	expenses.map((expense) => {
		total = total + expense.amount
	})
	return total
}
