import { FONTS_FAMILY } from '../constants/fonts';

import { css, styled } from 'styled-components';
import { SIZES } from '../constants/sizes';

const StyledH1 = styled.h1`
	font-family: ${FONTS_FAMILY.main};
	text-transform: uppercase;
	font-size: ${SIZES.xxxl};
	font-weight: normal;
	margin: 1rem 0;
`;

const StyledH2 = styled.h2`
	margin: 0;
	margin-bottom: 1rem;
	font-family: ${FONTS_FAMILY.secondary};
	text-transform: uppercase;
	font-size: ${({ $size }) => $size};
	font-weight: normal;
	letter-spacing: 0.1688rem;

	${props =>
		props['data-number'] &&
		css`
			&::before {
				content: attr(data-number);
				margin-right: 0.6rem;
				font-weight: bold;
				opacity: 0.25;
			}
		`}
`;

export { StyledH1, StyledH2 };
