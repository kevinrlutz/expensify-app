import React from 'react'
import { Link as NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<h1>Expensify</h1>
			<NavLink to="/" activeClassName="selected">
				Dashboard
			</NavLink>
			&nbsp;
			<NavLink to="/create" activeClassName="is-active">
				Create
			</NavLink>
			&nbsp;
		</div>
	)
}

export default Header
