import { makeHeader } from './header.js';
import { makeHomePage } from './home.js';
import { makeContactPage } from './contact.js';
import { makeMenuPage } from './menu.js';

const container = document.getElementById('content');
container.appendChild(makeHeader());

container.appendChild(makeContactPage());


