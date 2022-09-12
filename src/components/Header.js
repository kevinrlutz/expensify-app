import React from 'react'
import { Link as NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="header__content">
					<NavLink to="/" className="header__title">
						<h1>Expensify</h1>
					</NavLink>
					<button>Log Out</button>
				</div>
			</div>
		</header>
	)
}

export default Header
