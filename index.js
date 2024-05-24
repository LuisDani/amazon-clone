// #region slider
const imgs = document.querySelectorAll(".container-slider ul img");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let i = 0;

function change(){
    for (let j = 0; j < imgs.length; j++){
        imgs[j].style.display = "none";
    }
    imgs[i].style.display = "block";
}

change();

leftBtn.addEventListener("click", (e) => {
    if(i > 0){
        i--;
    }
    else {
        i = imgs.length - 1;
    }
    change();
});

rightBtn.addEventListener("click", (e) => {
    if(i < imgs.length - 1){
        i++;
    }
    else {
        i = 0;
    }
    change();
});

