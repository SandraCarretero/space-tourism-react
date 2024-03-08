import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import { FONTS_FAMILY } from '../constants/fonts';
import { SIZES } from '../constants/sizes';

const StyledText = styled.p`
	color: ${({ $color }) => $color || COLORS.textColor};
	font-size: ${({ $size }) => $size || SIZES.l};
	font-family: ${({ $font }) => $font || FONTS_FAMILY.secondary};
	line-height: 30px;
`;

export { StyledText };
