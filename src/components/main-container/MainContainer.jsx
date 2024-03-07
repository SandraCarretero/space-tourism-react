import Header from '../header/Header';
import { StyledMainContainer, StyledTitle } from './mainContainer.styles';

const MainContainer = () => {
	return (
		<>
			<div>
				<Header />
				<StyledMainContainer>
					<h2>SO, YOU WANT TO TRAVEL TO</h2>
					<StyledTitle>SPACE</StyledTitle>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
					<div>
						<span>EXPLORE</span>
					</div>
				</StyledMainContainer>
				<img src='' alt='' />
			</div>
		</>
	);
};
export default MainContainer;
