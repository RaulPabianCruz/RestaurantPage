import bucatini from './images/bucatini.jpg';
import glassNoodle from './images/glass-noodle.jpg';
import kelpNoodle from './images/kelp-noodle.jpg';
import lomeinNoodle from './images/lomein-noodle.jpg';
import ramenNoodle from './images/ramen-noodle.jpg';
import riceNoodle from './images/rice-noodle.jpg';
import sobaNoodle from './images/soba-noodle.jpg';
import somenNoodle from './images/somen-noodle.jpg';
import spaghetti from './images/spaghetti.jpg';
import udonNoodle from './images/udon-noodle.jpg';
import wontonNoodle from './images/wonton-noodle.jpg';

const IMAGE_ARRAY = [bucatini, glassNoodle, kelpNoodle, lomeinNoodle,
                ramenNoodle, riceNoodle, sobaNoodle, somenNoodle,
                spaghetti, udonNoodle, wontonNoodle];
const NAME_ARRAY = ['Bucatini', 'Glass Noodles', 'Kelp Noodles',
                'Lo-Mein Noodles', 'Ramen Noodles', 'Rice Noodles',
                'Soba Noodles', 'Somen Noodles', 'Spaghetti', 
                'Udon Noodles', 'Wonton Noodles'];


const makeMenuPage = function() {
    const menuPageContainer = document.createElement('div');
    menuPageContainer.classList.add('menu-page-container');
    
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Noods Menu:';
    menuTitle.classList.add('menu-title');

    const menuContainer = makeMenuContent();
    menuContainer.classList.add('menu-items-container');
    
    menuPageContainer.appendChild(menuTitle);
    menuPageContainer.appendChild(menuContainer);

    return menuPageContainer;
};

const makeMenuContent = function() {
    const container = document.createElement('div');

    const menuItems = new Array(11);
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i] = document.createElement('div');
        menuItems[i].classList.add('menu-item');

        const menuImage = document.createElement('img');
        menuImage.src = IMAGE_ARRAY[i];
        menuImage.classList.add('food-image');
        const menuName = document.createElement('p');
        menuName.textContent = NAME_ARRAY[i];
        menuName.classList.add('food-name');

        menuItems[i].appendChild(menuImage);
        menuItems[i].appendChild(menuName);
        
        container.appendChild(menuItems[i]);
    }

    return container;
}

export { makeMenuPage };

