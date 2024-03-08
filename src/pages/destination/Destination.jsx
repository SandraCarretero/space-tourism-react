import { useState } from 'react';
import DestinationImage from '../../components/destination-image/DestinationImage';
import DestinationTabs from '../../components/destination-tabs/DestinationTabs';
import { DESTINATION_DATA } from '../../constants/destination-data';
import { FONTS_FAMILY } from '../../constants/fonts';
import { SIZES } from '../../constants/sizes';
import { StyledText } from '../../styles/texts';
import { StyledH2 } from '../../styles/titles';
import { StyledPageContainer } from '../pages.styles';

const Destination = () => {
	const [tabActive, setTabActive] = useState(0);
	const { DESTINATION_TABS, DESTINATION_INFO } = DESTINATION_DATA;
	return (
		<StyledPageContainer $bgImage='/assets/destination/background-destination-mobile.jpg'>
			<StyledH2 $size={SIZES.l} data-number='01'>
				PICK YOUR DESTINATION
			</StyledH2>
			<DestinationImage
				src={DESTINATION_INFO[tabActive].image}
				alt={`Image of ${DESTINATION_INFO[tabActive].title}`}
			/>
			<DestinationTabs
				tabs={DESTINATION_TABS}
				tabActive={tabActive}
				setTabActive={setTabActive}
			/>
			<StyledH2 $size={SIZES.xxl}>{DESTINATION_INFO[tabActive].title}</StyledH2>
			<StyledText>{DESTINATION_INFO[tabActive].text}</StyledText>
			<hr />
			<StyledH2 $size={SIZES.xs}>AVG. DISTANCE</StyledH2>
			<StyledText $size={SIZES.xl} $font={FONTS_FAMILY.main}>
				{DESTINATION_INFO[tabActive].avgDistance}
			</StyledText>
			<StyledH2 $size={SIZES.xs}>Est. travel time</StyledH2>
			<StyledText $size={SIZES.xl} $font={FONTS_FAMILY.main}>
				{DESTINATION_INFO[tabActive].travelTime}
			</StyledText>
		</StyledPageContainer>
	);
};

export default Destination;
