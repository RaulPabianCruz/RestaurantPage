const makeHomePage = function() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    
    const contentContainer = makeHomeContent();
    homeContainer.appendChild(contentContainer);

    return homeContainer;
};

const makeHomeContent = function() {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('home-content');

    const mainText = makeHomeText();
    const annoucement = makeAnnouncement();

    contentContainer.appendChild(mainText);
    contentContainer.appendChild(annoucement);

    return contentContainer;
};

const makeHomeText = function() {
    const mainText = document.createElement('div');
    mainText.classList.add('home-text');
    
    const title = makeTitle();
    const message = makeMessage();

    mainText.appendChild(title);
    mainText.appendChild(message);

    return mainText;
};

const makeTitle = function() {
    const title = document.createElement('h1');
    title.textContent = 'The Hub For All Your Noodle Needs';
    title.classList.add('title');
    title.classList.add('home');

    return title;
};

const makeMessage = function() {
    const message = document.createElement('p');
    message.textContent = 'Noods is the manifestation of the desire in'
        + ' all noodle-lover\'s hearts, the desire to explore and '
        + ' experience every pleasure that can be found within noodles.'
        + 'Whether you are a noodle aficionado or just a newbie noodle '
        + 'enjoyer, Noods\' wide selection of noodle dishes found across '
        + 'the globe will satisfy this desire every time.';
    message.classList.add('message');
    message.classList.add('home');

    return message;
};

const makeAnnouncement = function() {
    const announcement = document.createElement('div');
    announcement.classList.add('announcement');

    const annMessage = document.createElement('h2');
    annMessage.textContent = 'Noods Merch Coming Soon!';
    annMessage.classList.add('ann-mssg');
    annMessage.classList.add('home');

    announcement.appendChild(annMessage);
    return announcement;
};

export { makeHomePage };