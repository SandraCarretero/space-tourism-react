import Explore from '../../components/explore/Explore';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';
import { StyledText } from '../../styles/texts';
import { StyledH1, StyledH2 } from '../../styles/titles';
import { StyledPageContainer } from '../pages.styles';

const Home = () => {
	return (
		<StyledPageContainer $bgImage='/assets/home/background-home-mobile.jpg'>
			<StyledH2 $size={SIZES.l}>SO, YOU WANT TO TRAVEL TO</StyledH2>
			<StyledH1>SPACE</StyledH1>
			<StyledText $size={SIZES.s} $color={COLORS.textColor}>
				Let’s face it; if you want to go to space, you might as well genuinely
				go to outer space and not hover kind of on the edge of it. Well sit
				back, and relax because we’ll give you a truly out of this world
				experience!
			</StyledText>
			<Explore />
		</StyledPageContainer>
	);
};

export default Home;
