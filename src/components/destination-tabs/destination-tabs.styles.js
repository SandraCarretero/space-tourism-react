import styled from 'styled-components';

const StyledDestinationTabs = styled.div`
	display: flex;
	gap: 1.625rem;
	width: 237px;
	margin-inline: auto;
	margin-bottom: 1.25rem;
`;

const StyledDestinationTab = styled.span`
	width: fit-content;
	border-bottom: ${({ $active }) => ($active ? '3px solid #fff' : 'none')};
	padding-bottom: 0.5rem;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 0.875rem;
	letter-spacing: 0.125rem;
	text-transform: uppercase;
`;

export { StyledDestinationTab, StyledDestinationTabs };
