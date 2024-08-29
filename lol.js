const goods = ["Apple Pie", "Chocolate Cake", "Cheesecake", "Brownie"];
const coffee = ["Latte Macchiato", "Espresso", "Cappucino", "Americano"]
const teas = ["Green Tea","Herbal Tea","Chai Latte","Black Tea"]
const snacks = ["Croissant","Muffin","Bar","Bagel"]
// second loop through prices
const prices = ["1.00€", "1.50€","2.00€", "2.50€"]

// add innerHTML <ul>
function fooFunc(food){   
    let el = document.getElementById("food");
    let prc = document.getElementById("prices")
    let menuP = document.getElementById("menu-placeholder")
    el.innerHTML = "";
    prc.innerHTML = "";
    menuP.style.display = "none"
    el.innerHTML += "<ul>"
    prc.innerHTML += "<ul>"
    for(let i = 0; i < food.length; i++){
        el.innerHTML += "<li>" + food[i] + "</li>";
        prc.innerHTML += "<li>" + prices[i] + "</li>";
    }
    el.innerHTML += "</ul>"
    prc.innerHTML += "</ul>"
}
// onclick insert link for croissant pics
const pics = ["https://static.vecteezy.com/system/resources/previews/019/040/583/original/an-8-bit-retro-styled-pixel-art-illustration-of-an-apple-pie-free-png.png","https://cdn4.iconfinder.com/data/icons/random-8-bit-pixel/512/coffee-512.png", "https://i.pinimg.com/originals/ba/eb/fc/baebfcff28e82931d98c0712e94f32ea.png","https://i.pinimg.com/originals/1a/56/ea/1a56eaaaf78869d7c6e0e620b2b98394.gif"]
function imgFunc(info, num) {
    let imgs = document.getElementById("imgs");
    imgs.innerHTML = "";
    // insert pic
    imgs.innerHTML = '<img src="' + pics[num] + '"' + '' + 'alt=' + '"' + info + '">'
}

function tabIndex(){
    let el = document.getElementsByTagName("button");
    let hdln = document.getElementsByTagName("h1");
    for(let i = 0; i < el.length; i++){
        el[i].setAttribute("tabindex", "0")
    }

    for(let i = 0; i < hdln.length; i++){
        hdln[i].setAttribute("tabIndex", "0")
    }
}

function unBlur(){
    x = document.querySelector("#about")
    x.style.animation = "shine 2s ease"
}
