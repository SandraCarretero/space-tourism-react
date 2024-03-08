import styled from 'styled-components';

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
	width: 254px;
	height: 100vh;
	padding: 7.375rem 2rem;
	background-color: rgb(255 255 255 / 0.05);
	backdrop-filter: blur(30px);
	text-align: left;
	transform: translateX(${({ $isMenuOpen }) => ($isMenuOpen ? '0' : '100%')});
	transition: transform 0.3s;
`;

const StyledMenuItem = styled.li`
	margin-bottom: 2rem;
	text-transform: uppercase;
	font-family: 'Barlow Condensed', sans-serif;
	color: #fff;
	letter-spacing: 2px;
	word-spacing: 0.5rem;
`;

export { StyledMenuItem, StyledNav };
