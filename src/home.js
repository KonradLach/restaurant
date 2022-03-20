

const createMap = () =>{
        var map = L.map('map').setView([46.4214612,-117.0257842], 17.1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia29ucmFkbGsiLCJhIjoiY2wwdTRma2szMHRxZTNicGt3ZXJlZnBkNiJ9.K-GiCqZxzAhAIMq43oCuIg'
    }).addTo(map);

    var marker = L.marker([46.421,-117.025]).addTo(map);

}


const createSection = (idName) =>{
    let section = document.createElement("section");
    section.setAttribute('id',idName);
    return section;
} 

const createDiv = (idName) => {
    let div = document.createElement("div");
    div.setAttribute('id',idName);
    return div;
}

const createPara = (text) => {
    let para = document.createElement("p");
    para.textContent = text;
    return para;
}

const createLi = (ul,arr) =>{
    for(let i=0;i< arr.length;i++){
        let li = document.createElement("li");
        li.innerHTML = arr[i];
        ul.appendChild(li)
    }
    return ul;
    
}

const createH = (num,text) => {
    const heading = document.createElement(`h${num}`);
    heading.innerText = text;
    return heading
}


const createHome = () => {
    const content = document.getElementById('content')
    
    //create main picture and title across
    const mainOverlay = createSection("mainOverlay");
    content.appendChild(mainOverlay);
    mainOverlay.appendChild(createDiv('title'));

    //create about section
    const aboutSection = createSection('about');
    content.appendChild(aboutSection);
    const aboutUsPara = createDiv('aboutUsPara');
    for (let index = 0; index < 3; index++) {
        aboutUsPara.appendChild(createPara('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at labore placeat modi soluta porro dolorem distinctio, sunt expedita eos voluptatem ea mollitia, libero inventore doloremque autem minima dolorum dolore'));
    }
    const rightSideAboutUs = createDiv('rightSideAboutUs');
    rightSideAboutUs.appendChild(createH('2','Our Story'));
    rightSideAboutUs.appendChild(aboutUsPara);
    const aboutContainer = createDiv('aboutContainer');
    aboutContainer.appendChild(createDiv('picture1'));
    aboutContainer.appendChild(createDiv('picture2'));
    aboutContainer.appendChild(createDiv('rightAbout')).appendChild(rightSideAboutUs);
    aboutSection.appendChild(aboutContainer);

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


    const contactSection = createSection('contact');
    content.appendChild(contactSection);
    const contactContainer = createDiv('contactContainer');
    contactContainer.appendChild(createH('2','Contact Us'));
    contactSection.appendChild(contactContainer);

    const contactFlex = createDiv('contactFlex');
    const contactInfo = createDiv('contactInfo');
    contactInfo.appendChild(createPara('(123)-456-7890'));
    contactInfo.appendChild(createPara('123 Main St'));
    contactInfo.appendChild(createPara('Lewiston, ID'));
    const mapDiv = createDiv('map');
    contactFlex.appendChild(contactInfo);
    contactFlex.appendChild(mapDiv);
    contactContainer.appendChild(contactFlex);
    createMap();
}

export{createHome,
    createDiv,
    createH,
    createLi,
    createMap,
    createPara,
    createSection
};