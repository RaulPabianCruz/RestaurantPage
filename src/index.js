import { makeHeader } from './header.js';
import { makeHomePage } from './home.js';

const container = document.getElementById('content');
container.appendChild(makeHeader());

container.appendChild(makeHomePage());


