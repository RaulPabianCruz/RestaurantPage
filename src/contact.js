const makeContactPage = function() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const hours = makeHourContainer();
    const locations = makeLocationsContainer();
    const conInfo = makeInfoContainer();

    contactContainer.appendChild(hours);
    contactContainer.appendChild(locations);
    contactContainer.appendChild(conInfo);

    return contactContainer;
};

const makeHourContainer = function() {
    const hoursContainer = makeHoursContent();
    hoursContainer.classList.add('hours-info');
    hoursContainer.classList.add('container');

    return hoursContainer;
};

const makeLocationsContainer = function() {
    const locationsContainer = makeLocationContent();
    locationsContainer.classList.add('locations-info');
    locationsContainer.classList.add('container');

    return locationsContainer;
};

const makeInfoContainer = function() {
    const conInfoContainer = makeConInfoContent();
    conInfoContainer.classList.add('con-info');
    conInfoContainer.classList.add('container');

    return conInfoContainer;
};

const makeHoursContent = function() {
    const container = document.createElement('div');

    const hourText = document.createElement('h2');
    hourText.textContent = 'Hours';
    hourText.classList.add('heading');
    
    const weekdays = new Array(7);

    for(let i = 0; i < 7; i++){
        weekdays[i] = document.createElement('p');
    }
    
    weekdays[0].textContent = 'Monday: 9AM-9PM';
    weekdays[1].textContent = 'Tuesday: 9AM-9PM';
    weekdays[2].textContent = 'Wednesday: 9AM-9PM';
    weekdays[3].textContent = 'Thursday: 9AM-9PM';
    weekdays[4].textContent = 'Friday: 9AM-3AM';
    weekdays[5].textContent = 'Saturday: 9AM-3AM';
    weekdays[6].textContent = 'Sunday: 9AM-9PM';

    container.appendChild(hourText);

    weekdays.forEach((day) => {
        container.appendChild(day);
    });

    return container;
};


const makeLocationContent = function() {
    const container = document.createElement('div');

    const locationText = document.createElement('h2');
    locationText.textContent = 'Locations';
    locationText.classList.add('heading');

    const location1 = document.createElement('li');
    location1.textContent = '123 Noodle Drive, San Francisco, CA';

    const location2 = document.createElement('li');
    location2.textContent = '456 Carb Street, Los Angeles, CA';

    container.appendChild(locationText);
    container.appendChild(location1);
    container.appendChild(location2);

    return container;
};

const makeConInfoContent = function() {
    const container = document.createElement('div');

    const contactText = document.createElement('h2');
    contactText.textContent = 'Contact Info';
    contactText.classList.add('heading');

    const phoneContainer = makePhoneContent();
    const emailContainer = makeEmailContent();

    const socialText = document.createElement('h2');
    socialText.textContent = 'Socials';
    socialText.classList.add('heading');

    const twitterContainer = makeTwitterContent();
    const instaContainer = makeInstaContent();

    container.appendChild(contactText);
    container.appendChild(phoneContainer);
    container.appendChild(emailContainer);
    container.appendChild(socialText);
    container.appendChild(twitterContainer);
    container.appendChild(instaContainer);
    return container;
};

const makePhoneContent = function() {
    const container = document.createElement('div');

    const phoneText = document.createElement('h3');
    phoneText.textContent = 'Phone';
    phoneText.classList.add('small-heading');

    const phoneNum = document.createElement('p');
    phoneNum.textContent = '(123) 456-7890';

    container.appendChild(phoneText);
    container.appendChild(phoneNum);
    return container;
};

const makeTwitterContent = function() {
    const container = document.createElement('div');

    const twitterText = document.createElement('h3');
    twitterText.textContent = 'Twitter';
    twitterText.classList.add('small-heading');

    const twitterName = document.createElement('p');
    twitterName.textContent = '@Noods4Lyfe';

    container.appendChild(twitterText);
    container.appendChild(twitterName);
    return container;
};

const makeInstaContent = function() {
    const container = document.createElement('div');

    const instaText = document.createElement('h3');
    instaText.textContent = 'Instagram';
    instaText.classList.add('small-heading');

    const instaName = document.createElement('p');
    instaName.textContent = '@Noods';

    container.appendChild(instaText);
    container.appendChild(instaName);
    return container;
};

const makeEmailContent = function() {
    const container = document.createElement('div');

    const emailText = document.createElement('h3');
    emailText.textContent = 'Email';
    emailText.classList.add('small-heading');

    const emailName = document.createElement('p');
    emailName.textContent = 'Noods@email.com';

    container.appendChild(emailText);
    container.appendChild(emailName);
    return container;
};

export { makeContactPage };