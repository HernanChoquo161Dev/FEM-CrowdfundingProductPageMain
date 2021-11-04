const bookmarkContent = document.querySelector(".bookmark");
const radioOptions = document.querySelectorAll(".support__radio");
const continueOption = document.querySelectorAll(".btn-support--menu");

const supportWindowsBlock = document.querySelector(".support-window");

const supportMenuBlock = document.querySelector(".support-menu");

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
        //thanckBlock.classList.toggle("thanks--show");
        supportMenuBlock.appendChild(createBlockThanks());

        btnBlockThanksActive();
    });
}

/*
btnThanks.addEventListener("click", (event)=>{
    supportMenuBlock.classList.toggle("support-menu--show");
    supportWindowsBlock.classList.toggle("support-window--hidden");
    thanckBlock.classList.toggle("thanks--show");

    for(let option of radioOptions){
        option.checked = false;
    }
});*/

function btnBlockThanksActive(){
    const btnThanks = document.querySelector(".btn-support--thanks");

    btnThanks.addEventListener("click", (event)=>{
        const thanckBlock = document.querySelector(".thanks");

        supportMenuBlock.classList.toggle("support-menu--show");
        supportWindowsBlock.classList.toggle("support-window--hidden");
        thanckBlock.classList.toggle("thanks--show");

        for(let option of radioOptions){
            option.checked = false;
        }

        thanckBlock.remove();
    });
}

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

function createElementWithClass(elem, elemClass){
    const newElem = document.createElement(elem);
    newElem.classList = elemClass;

    return newElem;
}
function createElementWithClass(elem, elemClass, elemText, image){
    const newElem = document.createElement(elem);
    newElem.classList = elemClass;
    if(!image){
        newElem.textContent = elemText;
    }
    else{
        newElem.src = "../images/icon-check.svg";
    }

    return newElem;
}

function createBlockThanks(){
    const textBlock = ["Thanks for your support!", "Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.", "Got it!"];
    const thankFrangment = document.createDocumentFragment();
    
    const divContent = createElementWithClass("DIV", "thanks thanks--show");
    const divImgContent = createElementWithClass("DIV", "thanks__box-image")
    divImgContent.append(createElementWithClass("IMG", "thanks__image", "../images/icon-check.svg", true));
    const titleContent = createElementWithClass("H1", "thanks__title", textBlock[0], false);
    const textContent = createElementWithClass("P", "thanks__text", textBlock[1], false);
    const btnContent = createElementWithClass("BUTTON", "btn-support btn-support--thanks",textBlock[2],false);

    divContent.append(divImgContent);
    divContent.append(titleContent);
    divContent.append(textContent);
    divContent.append(btnContent);

    thankFrangment.append(divContent);

    return thankFrangment;
}