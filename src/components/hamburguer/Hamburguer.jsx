import { StyledHamburguer } from './hamburguer.styles';

const Hamburguer = ({ image, action }) => {
	return <StyledHamburguer src={image} onClick={action} />;
};

export default Hamburguer;
