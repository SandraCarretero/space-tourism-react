import { v4 } from 'uuid';

export const MENU = [
	{
		id: v4(),
		to: '/',
		title: '00 HOME'
	},
	{
		id: v4(),
		to: '/destination',
		title: '01 Destination'
	},
	{
		id: v4(),
		to: '/crew',
		title: '02 Crew'
	},
	{
		id: v4(),
		to: '/technology',
		title: '03 Technology'
	}
];
