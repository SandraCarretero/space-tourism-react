import { v4 } from 'uuid';

const DESTINATION_TABS = [
	{
		id: v4(),
		name: 'moon'
	},
	{
		id: v4(),
		name: 'mars'
	},
	{
		id: v4(),
		name: 'europa'
	},
	{
		id: v4(),
		name: 'titan'
	}
];

const DESTINATION_INFO = [
	{
		image: '/assets/destination/image-moon.png',
		title: 'moon',
		text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
		avgDistance: '384,400 KM',
		travelTime: '3 DAYS'
	},
	{
		image: '/assets/destination/image-mars.png',
		title: 'mars',
		text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
		avgDistance: '225 MIL. KM',
		travelTime: '9 MONTHS'
	},
	{
		image: '/assets/destination/image-europa.png',
		title: 'europa',
		text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
		avgDistance: '628 MIL. KM',
		travelTime: '3 YEARS'
	},
	{
		image: '/assets/destination/image-titan.png',
		title: 'titan',
		text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
		avgDistance: '1.6 BIL. KM',
		travelTime: '7 YEARS'
	}
];

export const DESTINATION_DATA = {
	DESTINATION_TABS,
	DESTINATION_INFO
};
