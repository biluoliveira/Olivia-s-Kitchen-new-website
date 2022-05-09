
window.addEventListener("load", function(){
 /*---------animation on scroll-------------*/   
    AOS.init();
});

/*---------------------toggle navbar-------------*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/*close nav bar when clicking on a nav item*/

document.addEventListener("click", function(e){
    if (e.target.closest(".nav-item")){
        toggleNav();
}
});

/*---------sticky header------------*/

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        this.document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
})

/*---------menu tabs------------*/

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        AOS.init();
    }
});

/*---------menu cart------------*/
var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add(menu-item-title);
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var h3 = document.createElement('div');
    h3.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    h3.append(select);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.setAttribute('onclick','del(+addItemId+)');
    var CartItems = document.getElementById('menu-item');
    selectedItem.append(img);
    selectedItem.append(menu-item-title);
    selectedItem.append(h3);
    selectedItem.append(delBtn);
    CartItems.append(selectedItem);
}

function del(item){
    document.getElementById(item).remove();
}

/*---------cart------------*/
var btn =document.querySelector('#cart-items');
var cart =document.querySelector('.cart');

btn.addEventListener('click', function(){

    if(cart.style.display === 'block') {
        cart.style.display ='none';
    } else{
        cart.style.display ='block';
    }

});