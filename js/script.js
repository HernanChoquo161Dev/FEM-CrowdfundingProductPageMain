const supportMenuBlock = document.querySelector(".support-menu");

function activeBtnBlockThanks(){
    const btnThanks = document.querySelector(".btn-support--thanks");

    btnThanks.addEventListener("click", (event)=>{
        const thanckBlock = document.querySelector(".thanks");

        const supportWindowsBlock = document.querySelector(".support-window");
        supportMenuBlock.classList.toggle("support-menu--show");
        supportWindowsBlock.classList.toggle("support-window--hidden");
        thanckBlock.classList.toggle("thanks--show");

        const menu = document.querySelector(".support-window");
        menu.remove();
        
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
function insertBlockHTML(blockFather, funcitionCreateHTML, activeElementHTML, dataJson){
    const elem = funcitionCreateHTML(dataJson,true);
    blockFather.appendChild(elem);

    activeElementHTML();
    closeOptionMenu();
}
//button bookmarket
const bookmarkContent = document.querySelector(".bookmark");
bookmarkContent.addEventListener("click", (event)=>{
    let bookmark = document.querySelector(".bookmark__save");
    bookmark.classList.toggle("bookmark__save--color");
});
//option exit menu
function activeBlockMenu(){
    const exitMenu = document.querySelector(".support-window__image");
    exitMenu.addEventListener("click", (event)=>{
        supportMenuBlock.classList.toggle("support-menu--show");
    
        radioOptions.forEach((radio)=>{ radio.checked = false; });
    
        closeOptionMenu();

        const menu = document.querySelector(".support-window");
        menu.remove();
    });
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
    //button support card
    const continueOption = document.querySelectorAll(".btn-support--menu");
    continueOption.forEach((btnMenu)=>{
        btnMenu.addEventListener("click", (event)=>{
            const supportWindowsBlock = document.querySelector(".support-window");
            supportWindowsBlock.classList.toggle("support-window--hidden");
            createBlock(supportMenuBlock,TempleteThanksHTML,insertBlockHTML,activeBtnBlockThanks);
        });
    });
}
//support card main page
const btnSupportCard = document.querySelectorAll(".btn-support--font");
btnSupportCard.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        createBlock(supportMenuBlock,createSupportWindow,insertBlockHTML,activeBlockMenu);
        supportMenuBlock.classList.toggle("support-menu--show");
        window.scrollTo(0, 0);
    });
});

//Menu icon
const menuIcon = document.querySelector(".nav-page__image-menu");
menuIcon.addEventListener("click", (event)=>{
    console.log("click");
    const menuMobile = document.querySelector(".menu");
    menuMobile.classList.toggle("menu--show");
});