
// variables and constants
const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');
const productListCervezas = document.querySelector('.product-list-cervezas')
const productListAperitivos = document.querySelector('.product-list-aperitivos')
const productListWhisky = document.querySelector('.product-list-whisky')
const productListGin = document.querySelector('.product-list-gin')
const productListChampagne = document.querySelector('.product-list-champagne')
const productListSa = document.querySelector('.product-list-sa')
const productListOtros = document.querySelector('.product-list-otros')
const productListVodkas = document.querySelector('.product-list-vodkas')
const productListVinos = document.querySelector('.product-list-vinos')
const promocion1List = document.querySelector('.promocion1-list');
const promocion2List = document.querySelector('.promocion2-list');
const ofertas1List = document.querySelector('.ofertas1-list');
const ofertas2List = document.querySelector('.ofertas2-list');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');
const cartCountInfo = document.getElementById('cart-count-info');
const wpp = document.getElementById('enviar-pedido');
let cartItemID = 1;
let textWpp=[0][0];
let data2;
//agregar elementos a la lista mail
let listaMail = [];
let slideIndex = 1;
function crearLista(){
    for(i=0;i<148;i++){
        listaMail[i]=0;
    }
}

crearLista();
eventListeners(); 

// all event listeners
function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSONCervezas();
        loadJSONVodkas();
        loadJSONAperitivos();
        loadJSONVinos();
        loadJSONWhisky();
        loadJSONGin();
        loadJSONChampagne();
        loadJSONSa();
        loadJSONOtros();
        loadOfertas1();
        loadOfertas2();
        loadPromocion1();
        loadPromocion2();
        loadCart();
        showSlides(slideIndex);
        cambiarImagenPrincipal();
    });
    // toggle navbar when toggle button is clicked
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
    });

    // show/hide cart container
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });

    // delete from cart
    cartList.addEventListener('click', deleteProduct);

    //wpp
    wpp.addEventListener('click', enviarLista);

    // add to cart
    if(promocion1List != null){
        promocion1List.addEventListener('click', purchaseProduct);
        promocion2List.addEventListener('click', purchaseProduct);
    }
    if(ofertas1List != null){
    ofertas1List.addEventListener('click', purchaseProduct);
    ofertas2List.addEventListener('click', purchaseProduct);
    productListCervezas.addEventListener('click', purchaseProduct);
    productListVodkas.addEventListener('click', purchaseProduct);
    productListAperitivos.addEventListener('click', purchaseProduct);
    productListVinos.addEventListener('click', purchaseProduct);
    productListWhisky.addEventListener('click', purchaseProduct);
    productListGin.addEventListener('click', purchaseProduct);
    productListChampagne.addEventListener('click', purchaseProduct);
    productListSa.addEventListener('click', purchaseProduct);
    productListOtros.addEventListener('click', purchaseProduct);
    }
}

// update cart info
function updateCartInfo(){
    let cartInfo = findCartInfo();
    cartCountInfo.textContent = cartInfo.productCount;
    cartTotalValue.textContent = cartInfo.total;
}

// load product items content form JSON file
function loadJSONCervezas(){
    fetch('cervezas.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListCervezas.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server` + error);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONVodkas(){
    fetch('vodkas.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListVodkas.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONAperitivos(){
    fetch('aperitivos.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListAperitivos.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONVinos(){
    fetch('vinos.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item"">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListVinos.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}

function loadJSONWhisky(){
    fetch('whisky.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListWhisky.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONGin(){
    fetch('gin.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListGin.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONChampagne(){
    fetch('champagne.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListChampagne.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONSa(){
    fetch('sa.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListSa.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
function loadJSONOtros(){
    fetch('otros.json')
    .then(response => response.json())
    .then(data =>{
        data2= data;
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        productListOtros.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
// load promociones2 items content form JSON file
function loadOfertas1(){
    fetch('ofertas1.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                        <a class = "descuento-ofertas">${product.descuento}</a>
                    </div>

                    <div class = "product-content">
                        <h3 class = "product-name">${product.name}</h3>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        ofertas1List.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
// load promociones2 items content form JSON file
function loadOfertas2(){
    fetch('ofertas2.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                        <a class = "descuento-ofertas">${product.descuento}</a>
                    </div>

                    <div class = "product-content">
                        <h3 class = "product-name">${product.name}</h3>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        ofertas2List.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
// load promociones1 items content form JSON file
function loadPromocion1(){
    fetch('promociones1.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn" id="especial">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <p class = "product-name">${product.name}</p>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        promocion1List.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
// load promociones2 items content form JSON file
function loadPromocion2(){
    fetch('promociones2.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product => {
            html += `
                <div class = "product-item">
                    <div class = "product-img">
                        <img src = "${product.imgSrc}" alt = "product image">
                        <button type = "button" class = "add-to-cart-btn">
                            <i class = "fas fa-shopping-cart"></i>Agregar al pedido
                        </button>
                    </div>

                    <div class = "product-content">
                        <h3 class = "product-name">${product.name}</h3>
                        <span class = "product-category">${product.category}</span>
                        <p class = "product-price">$${product.price}</p>
                        <p class = "product-nro" style="display:none">${product.nro}</p>
                        <p class = "product-wpp" style="display:none">${product.wpp}</p>
                    </div>
                </div>
            `;
        });
        promocion2List.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}

// purchase product
function purchaseProduct(e){
    if(e.target.classList.contains('add-to-cart-btn')){
        let product = e.target.parentElement.parentElement;
        console.log(product);
        getProductInfo(product);
        cartCountInfo.style.animation = "mynewmove 2s";
    }
}
// get product info after add to cart button click
function getProductInfo(product){
    let productInfo = {
        id: cartItemID,
        imgSrc: product.querySelector('.product-img img').src,
        name: product.querySelector('.product-name').textContent,
        category: product.querySelector('.product-category').textContent,
        price: product.querySelector('.product-price').textContent,
        nro: product.querySelector('.product-nro').textContent,
        wpp: product.querySelector('.product-wpp').textContent
    }
    cartItemID++;
    addToCartList(productInfo);
    saveProductInStorage(productInfo);
}

//
function getProductInfo2(product){
    let productInfo = {
        id: cartItemID,
        name: product.querySelector('.cart-item-name').textContent,
        category: product.querySelector('.cart-item-category').textContent,
        price: product.querySelector('.cart-item-price').textContent,
        nro: product.querySelector('.cart-item-nro').textContent
    }
    console.log(productInfo.name);
    listaMail[productInfo.nro]--;
    console.log(listaMail[productInfo.nro])
}


// add the selected product to the cart list
function addToCartList(product){
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML = `
        <img src = "${product.imgSrc}" alt = "product image">
        <div class = "cart-item-info">
            <h3 class = "cart-item-name">${product.name}</h3>
            <span class = "cart-item-category">${product.category}</span>
            <span class = "cart-item-price">${product.price}</span>
            <span class = "cart-item-nro" style="display:none">${product.nro}</span>
            <span class = "cart-item-wpp" style="display:none">${product.wpp}</span>
        </div>

        <button type = "button" class = "cart-item-del-btn">
            <i class = "fas fa-times"></i>
        </button>
    `;
    cartList.appendChild(cartItem);
    //agregar elementos a la lista para mail
    console.log(product.name);
    console.log(product.nro);
    listaMail[product.nro]++;
    console.log(listaMail[product.nro])
}

// save the product in the local storage
function saveProductInStorage(item){
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}

// get all the products info if there is any in the local storage
function getProductFromStorage(){
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    // returns empty array if there isn't any product info
}

// load carts product
function loadCart(){
    let products = getProductFromStorage();
    if(products.length < 1){
        cartItemID = 1; // if there is no any product in the local storage
    } else {
        cartItemID = products[products.length - 1].id;
        cartItemID++;
        // else get the id of the last product and increase it by 1
    }
    products.forEach(product => addToCartList(product));

    // calculate and update UI of cart info 
    updateCartInfo();
}

// calculate total price of the cart and other info
function findCartInfo(){
    let products = getProductFromStorage();
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(1)); // removing dollar sign
        return acc += price;
    }, 0); // adding all the prices

    return{
        total: total.toFixed(2),
        productCount: products.length
    }
}

// delete product from cart list and local storage
function deleteProduct(e){
    let cartItem;
    let product = e.target.parentElement.parentElement;
    getProductInfo2(product);
    if(e.target.tagName === "BUTTON"){
        cartItem = e.target.parentElement;
        cartItem.remove(); // this removes from the DOM only
    } else if(e.target.tagName === "I"){
        cartItem = e.target.parentElement.parentElement;
        cartItem.remove(); // this removes from the DOM only
    }

    let products = getProductFromStorage();
    let updatedProducts = products.filter(product => {
        return product.id !== parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
    updateCartInfo();
}


//carousel


    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

/*search
const listaProductos = document.getElementById('listaProductos')
const searchBar = document.getElementById('searchBar');
console.log(searchBar);

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const productosFiltrados = data2.filter((character) => {
        return (
         character.name.toLowerCase().includes(searchString) 
        );
    });
    console.log(productosFiltrados);
});*/

//enviar pedido por wpp
function enviarLista(){
let x = getProductFromStorage();
let link = "https://wa.me/541124924167?text="
    for(let i=0;i<x.length;i++){
        console.log(x[i].wpp)
        if(i>0){
        //%0D%0A
        link += ",%20"
        }
        link += x[i].wpp
        console.log(link)
    }
    let cartInfo = findCartInfo();
    cartTotalValue.textContent = cartInfo.total;
    link += ",%20Total:$" + cartTotalValue.textContent;
    wpp.innerHTML = "Confirmar pedido";
    document.getElementById("enviar-pedido").addEventListener('click', function () {
       location.href = link;
    });
}

//cambio foto principal
function cambiarImagenPrincipal(){
    if(document.getElementById('foto-principal')!=null){
let index = 0;
let listaimg = ["images/local-nuevo.jpg", "images/hoarios-dia-padre.jpg", "images/info-pedidos.jpg"];
setInterval(changeImage, 3000);
    function changeImage() {
      let img = document.getElementById('foto-principal');
      img.src=listaimg[index];
      index++;
      if(index == 3)
      index = 0;
    }
}
}

