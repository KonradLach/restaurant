import {
    createDiv,
    createH,
    createLi,
    createSection} from './home';


const createMenu = () => {


    const menuSection = createSection('menu');
    content.appendChild(menuSection);
    menuSection.appendChild(createH('1','Menu'));
    const menuContainer = createDiv('menuContainer');
    const shareables = createDiv('shareables');
    shareables.classList.add('menuList');
    shareables.appendChild(createH('2','Shareables'));
    const shareablesList = document.createElement('ul');
    shareables.appendChild(createLi(shareablesList,['Bavarian Pretzel','Wings','Nachos', 'Charcuterie', 'Chips & Guac', 'Flatbread']));
    menuContainer.appendChild(shareables);

    //adding Wine
    const wine = createDiv('wine');
    wine.classList.add('menuList');
    wine.appendChild(createH('2','Wine'));
    const wineList = document.createElement('ul');
    wine.appendChild(createLi(wineList,['Wine 1', 'Wine 2', 'Wine 3', 'Wine 4', 'Wine 5']));
    menuContainer.appendChild(wine);

    //adding Beer
    const beer = createDiv('beer');
    beer.classList.add('menuList');
    beer.appendChild(createH('2','Beer'));
    const beerList = document.createElement('ul');
    beer.appendChild(createLi(beerList,['Bud Light', 'Allagash White', 'Miller Light', 'Blue Moon', 'Angry Orchard', 'Boom Bock']));
    menuContainer.appendChild(beer);

    menuSection.appendChild(menuContainer);
};

export{createMenu};
