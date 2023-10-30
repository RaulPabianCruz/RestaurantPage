import Icon from './images/noodles.svg';

const makeHeader = function() {
    const header = document.createElement('header');

    const logo = makeLogo();
    const homeBttn = makeHomeBttn();
    const menuBttn = makeMenuBttn();
    const contactBttn = makeContactBttn();

    header.appendChild(logo);
    header.appendChild(homeBttn);
    header.appendChild(menuBttn);
    header.appendChild(contactBttn);

    return header;
};

const makeLogo = function() {
    const logo = document.createElement('div');
    logo.classList.add('logo');

    const title = document.createElement('h1');
    title.textContent = 'Noods!';
    title.classList.add('header');
    title.classList.add('name');

    const titleIcon = document.createElement('img');
    titleIcon.src = Icon;
    titleIcon.classList.add('header');
    titleIcon.classList.add('icon');

    logo.appendChild(title);
    logo.appendChild(titleIcon);

    return logo;
};

const makeHomeBttn = function() {
    const homeBttn = document.createElement('button');
    homeBttn.textContent = 'Home';
    homeBttn.classList.add('header');
    homeBttn.classList.add('navBttn');
    return homeBttn;
};

const makeMenuBttn = function() {
    const menuBttn = document.createElement('button');
    menuBttn.textContent = 'Menu';
    menuBttn.classList.add('header');
    menuBttn.classList.add('navBttn');
    return menuBttn;
};

const makeContactBttn = function() {
    const contactBttn = document.createElement('button');
    contactBttn.textContent = 'Contact';
    contactBttn.classList.add('header');
    contactBttn.classList.add('navBttn');
    return contactBttn;
};

export { makeHeader };