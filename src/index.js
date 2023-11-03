import { makeHeader } from './header.js';
import { makeHomePage } from './home.js';
import { makeContactPage } from './contact.js';
import { makeMenuPage } from './menu.js';

const container = document.getElementById('content');
container.appendChild(makeHeader());

const loadHomePage = function() {
    container.appendChild(makeHomePage());
}

const loadContactPage = function() {
    container.appendChild(makeContactPage());
}

const loadMenuPage = function() {
    container.appendChild(makeMenuPage());
}

const removeCurrentPage = function() {
    container.removeChild(container.lastChild);
}

const homeBttn = document.getElementById('home-bttn');
homeBttn.addEventListener('click', () => {
    removeCurrentPage();
    loadHomePage();
});

const contactBttn = document.getElementById('contact-bttn');
contactBttn.addEventListener('click', () => {
    removeCurrentPage();
    loadContactPage();
});

const menuBttn = document.getElementById('menu-bttn');
menuBttn.addEventListener('click', () => {
    removeCurrentPage();
    loadMenuPage();
});

loadHomePage();


