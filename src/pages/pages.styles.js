import styled from 'styled-components';

const StyledPageContainer = styled.div`
	min-height: 100vh;
	padding: 5.5rem 1.5rem;
	text-align: center;
	background-image: ${({ $bgImage }) => `url(${$bgImage})`};
	background-size: cover;
`;

export { StyledPageContainer };
