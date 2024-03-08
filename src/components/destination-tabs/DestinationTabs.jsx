import {
	StyledDestinationTab,
	StyledDestinationTabs
} from './destination-tabs.styles';

const DestinationTabs = ({ tabs, tabActive, setTabActive }) => {
	return (
		<StyledDestinationTabs>
			{tabs.map((tab, index) => (
				<StyledDestinationTab
					key={tab.id}
					$active={tabActive === index}
					onClick={() => setTabActive(index)}
				>
					{tab.name}
				</StyledDestinationTab>
			))}
		</StyledDestinationTabs>
	);
};

export default DestinationTabs;
