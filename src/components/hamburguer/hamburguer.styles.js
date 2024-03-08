import styled from 'styled-components';

const StyledHamburguer = styled.img`
	position: fixed;
	top: 2.0625rem;
	right: 1.5rem;
	z-index: 10;

	@media screen and (width > 768px) {
		display: none;
	}
`;

export { StyledHamburguer };
