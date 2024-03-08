import { Link } from 'react-router-dom';
import { MENU } from '../../constants/menu';
import { StyledMenuItem, StyledNav } from './menu.styles';

const Menu = ({ isMenuOpen, action }) => {
	return (
		<>
			<StyledNav $isMenuOpen={isMenuOpen}>
				<ul>
					{MENU.map(({ id, to, title }) => (
						<StyledMenuItem key={id}>
							<Link to={to} onClick={action}>
								{title}
							</Link>
						</StyledMenuItem>
					))}
				</ul>
			</StyledNav>
		</>
	);
};

export default Menu;
