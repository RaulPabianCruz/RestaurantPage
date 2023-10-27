import Icon from './images/noodles.svg';

const container = document.getElementById('content');

const header = document.createElement('header');

const logo = document.createElement('div');
logo.classList.add('logo');

const title = document.createElement('h1');
title.textContent = 'Noods!';
title.classList.add('header');
title.classList.add('title');

const titleIcon = document.createElement('img');
titleIcon.src = Icon;
titleIcon.classList.add('header');
titleIcon.classList.add('icon');

const homeBttn = document.createElement('button');
homeBttn.textContent = 'Home';
homeBttn.classList.add('header');
homeBttn.classList.add('navBttn');

const menuBttn = document.createElement('button');
menuBttn.textContent = 'Menu';
menuBttn.classList.add('header');
menuBttn.classList.add('navBttn');

const contactBttn = document.createElement('button');
contactBttn.textContent = 'Contact';
contactBttn.classList.add('header');
contactBttn.classList.add('navBttn');

logo.appendChild(title);
logo.appendChild(titleIcon);
header.appendChild(logo);
header.appendChild(homeBttn);
header.appendChild(menuBttn);
header.appendChild(contactBttn);
container.appendChild(header);