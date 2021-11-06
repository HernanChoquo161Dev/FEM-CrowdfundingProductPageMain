const supportWindowsBlock = document.querySelector(".support-window");
const supportMenuBlock = document.querySelector(".support-menu");

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
function closeOptionMenu(){
    const options = document.querySelectorAll(".support__box-options");

    options.forEach((opt)=>{
        if(opt.classList.contains("support__box-options--show"))
            opt.classList.remove("support__box-options--show");
    })
    lastOption = undefined;
}
function insertBlockHTML(blockFather, funcitionCreateHTML, dataJson){
    const elem = funcitionCreateHTML(dataJson);
    blockFather.appendChild(elem);

    btnBlockThanksActive();
    closeOptionMenu();
}
//support block radio option
const radioOptions = document.querySelectorAll(".radio-info__radio");
var lastOption;
radioOptions.forEach((radio)=>{
    radio.addEventListener("click", (event)=>{
        if(event.target.tabIndex != 1){
            let newOptions = event.path[4].children[1];

            if(lastOption != undefined){
                lastOption.classList.toggle("support__box-options--show");
            }

            newOptions.classList.toggle("support__box-options--show");
            lastOption = newOptions;
        }
        else{
            if(lastOption){
                if(lastOption.classList.contains("support__box-options--show")){
                    lastOption.classList.toggle("support__box-options--show");
                    lastOption = undefined;
                }
            }
        }
    });
})
//button bookmarket
const bookmarkContent = document.querySelector(".bookmark");
bookmarkContent.addEventListener("click", (event)=>{
    let bookmark = document.querySelector(".bookmark__save");
    bookmark.classList.toggle("bookmark__save--color");
});
//button support card
const continueOption = document.querySelectorAll(".btn-support--menu");
continueOption.forEach((btnMenu)=>{
    btnMenu.addEventListener("click", (event)=>{
        supportWindowsBlock.classList.toggle("support-window--hidden");
        createBlock(supportMenuBlock,createBlockThanks,insertBlockHTML);
    });
});
//option exit menu
const exitMenu = document.querySelector(".support-window__image");
exitMenu.addEventListener("click", (event)=>{
    supportMenuBlock.classList.toggle("support-menu--show");

    radioOptions.forEach((radio)=>{ radio.checked = false; });

    closeOptionMenu();
});
//support card main page
const btnSupportCard = document.querySelectorAll(".btn-support--font");
btnSupportCard.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        
        supportMenuBlock.classList.toggle("support-menu--show");
        window.scrollTo(0, 0);
    });
});