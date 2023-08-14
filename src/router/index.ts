import Contries from 'pages/Contries/Contries';
import ContryPage from 'pages/ContryPage/ContryPage';

export const routes = [
	{ path: '/countries', component: Contries },
	{ path: '/countries/:name', component: ContryPage },
	{ path: '*', component: Contries },
];
