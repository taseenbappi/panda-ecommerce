const catagorieTitle = document.getElementById('catTitle');
catagorieTitle.style.color = "orange";
const catagorieTitleback = document.getElementById('catTitleBackpack');
catagorieTitleback.style.color = "orange";
const backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = "MintCream";
const shoesCard = document.getElementsByClassName('shoesCard');
for (const card of shoesCard) {
    card.style.borderRadius = "30px"
}

const clicked = document.getElementById('clicked');
clicked.addEventListener('click', function () {
    console.log('clicked');
});
clicked.addEventListener('click', function () {
    const shoesCard = document.getElementsByClassName('shoesCard');
    shoesCard.style.display = 'none';
    // clicked.style.display = 'none';
});




