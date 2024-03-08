import { useState } from 'react';
import Hamburguer from '../hamburguer/Hamburguer';
import Menu from '../menu/Menu';
import { StyledHeader } from './header.styles';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	console.log(isMenuOpen);
	return (
		<StyledHeader>
			<img src='/assets/shared/logo.svg' alt='' />
			<Hamburguer
				setIsMenuOpen={setIsMenuOpen}
				image={
					isMenuOpen
						? '/assets/shared/icon-close.svg'
						: '/assets/shared/icon-hamburger.svg'
				}
				alt=''
				action={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<Menu isMenuOpen={isMenuOpen} action={() => setIsMenuOpen(false)} />
		</StyledHeader>
	);
};

export default Header;
