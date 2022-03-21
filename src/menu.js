import {
    createDiv,
    createH,
    createLi,
    createPara,
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
    shareables.appendChild(createLi(shareablesList,['Bavarian Pretzel $8','Wings $12','Nachos $10', 'Charcuterie $15', 'Chips & Guac $6', 'Flatbread $14']));
    menuContainer.appendChild(shareables);

    //adding Wine
    const wine = createDiv('wine');
    wine.classList.add('menuList');
    wine.appendChild(createH('2','Wine'));
    const wineList = document.createElement('ul');
    wine.appendChild(createLi(wineList,['Wine 1   $6/$26', 'Wine 2  $7/$30', 'Wine 3   $6/$26', 'Wine 4   $8/$38', 'Wine 5   $10/$50']));
    menuContainer.appendChild(wine);

    //adding Beer
    const beer = createDiv('beer');
    beer.classList.add('menuList');
    beer.appendChild(createH('2','Beer'));
    const beerList = document.createElement('ul');
    beer.appendChild(createLi(beerList,['Bud Light $3', 'Allagash White $5', 'Miller Light $4', 'Blue Moon $5', 'Angry Orchard $5', 'Boom Bock $6']));
    menuContainer.appendChild(beer);


    const specialsDiv = createDiv('specialsDiv');
    specialsDiv.appendChild(createPara('Happy Hour 4-6PM every day. $1 off all imports!'));
    specialsDiv.appendChild(createPara('Thursday is half price Shareables day!'))

    menuSection.appendChild(menuContainer);
    menuSection.appendChild(specialsDiv);

    const slideShow = createDiv('slideShow');
    const pretzel = document.createElement('img');
    pretzel.src = 'img/pretzel.jpeg';
    pretzel.classList.add('slide')
    const charcuterie = document.createElement('img');
    charcuterie.src = 'img/charcuterie.jpeg';
    charcuterie.classList.add('slide')
    const flatbread = document.createElement('img');
    flatbread.src = 'img/charcuterie.jpeg';
    flatbread.classList.add('slide')
    const wings = document.createElement('img');
    wings.src = 'img/wings.jpeg';
    wings.classList.add('slide');
    
    
    slideShow.appendChild(pretzel);
    slideShow.appendChild(charcuterie);
    slideShow.appendChild(flatbread);
    slideShow.appendChild(wings);
    menuSection.appendChild(slideShow);
    
    carousel();


};
// var slideIndex = 0;
// carousel();
let slideIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    console.log(slideIndex)
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
export{createMenu, carousel};
