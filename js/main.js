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
//card remove function
const butn = document.getElementsByClassName('deleteBtn')
for (const button of butn) {
    button.addEventListener('click', function () {
        document.getElementById('col').remove();
    })
}

////email validation
const visitEmail = document.getElementById('visitEmail');
visitEmail.addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        document.getElementById('submitBtn').removeAttribute('disabled');
    }
    else {
        document.getElementById('submitBtn').setAttribute('disabled', true);
    }
})

/////image changer
function imgCng() {
    console.log('hover');
    document.getElementById('catImg').src = 'shoe-2.png';
}
function imgUnCng() {
    document.getElementById('catImg').src = 'shoe-1.png';
}

