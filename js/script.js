const bookmarkContent = document.querySelector(".bookmark");
const radioOptions = document.querySelectorAll(".support__radio");
const continueOption = document.querySelectorAll(".btn-support--menu");

const supportWindowsBlock = document.querySelector(".support-window");
const thanckBlock = document.querySelector(".thanks");

const supportMenuBlock = document.querySelector(".support-menu");

const btnThanks = document.querySelector(".btn-support--thanks");

const btnSupportCard = document.querySelectorAll(".btn-support--font");

const exitMenu = document.querySelector(".support-menu__image");

bookmarkContent.addEventListener("click", (event)=>{
    let bookmark = document.querySelector(".bookmark__save");
    bookmark.classList.toggle("bookmark__save--color");
});

var lastOption;

for(let option of radioOptions){
    option.addEventListener("click", (event)=>{
        if(event.target.tabIndex != 1){
            let newOptions = event.path[4].children[1];

            if(lastOption != undefined){
                lastOption.classList.toggle("support__box-options--show");
            }

            newOptions.classList.toggle("support__box-options--show");
            lastOption = newOptions;
        }
        else{
            if(lastOption.classList.contains("support__box-options--show")){
                lastOption.classList.toggle("support__box-options--show");
                lastOption = undefined;
            }
        }
    });
}

for(let btnOpt of continueOption){
    btnOpt.addEventListener("click", (event)=>{
        supportWindowsBlock.classList.toggle("support-window--hidden");
        thanckBlock.classList.toggle("thanks--show");
    });
}

btnThanks.addEventListener("click", (event)=>{
    supportMenuBlock.classList.toggle("support-menu--show");
    supportWindowsBlock.classList.toggle("support-window--hidden");
    thanckBlock.classList.toggle("thanks--show");

    for(let option of radioOptions){
        option.checked = false;
    }
});

exitMenu.addEventListener("click", (event)=>{
    supportMenuBlock.classList.toggle("support-menu--show");

    for(let option of radioOptions){
        option.checked = false;
    }
});

for(let btnCard of btnSupportCard){
    console.log(btnCard);
    btnCard.addEventListener("click", (event)=>{
        supportMenuBlock.classList.toggle("support-menu--show");
        window.scrollTo(0, 0);
    });
}
