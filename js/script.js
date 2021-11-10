const supportMenuBlock = document.querySelector(".support-menu");
const targetMoney = 100000;
let totalBackers = 5007;
let currentMoney = 89914;
let curretProgress = (currentMoney * 100) / targetMoney;

const progressBar = document.querySelector(".progress-bar__progress");
progressBar.style.width = `${curretProgress}%`;

function changeColorSVG(){
    const circleSVG = document.querySelector("#svg-c");
    circleSVG.classList.toggle("bookmark__circle");
    const pathSVG = document.querySelector("#svg-g");
    pathSVG.classList.toggle("bookmark-svg");
}
function upgradeTargetMoney(money){
    if(currentMoney < targetMoney){
        currentMoney+= money;
        curretProgress = (currentMoney * 100) / targetMoney;
        if(curretProgress > 100)
            curretProgress = 100;
        progressBar.style.width = `${curretProgress}%`;

        const textMoney = document.querySelector("#currentMoney");
        textMoney.textContent = `$${currentMoney}`;
        
        const backers = document.querySelector("#currentPeople");
        totalBackers++;
        backers.textContent = totalBackers;
    }
}
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

    changeColorSVG();
});
//Active option exit menu, input radio and button card menu
function activeBlockMenu(){
    const exitMenu = document.querySelector(".support-window__image");
    exitMenu.addEventListener("click", (event)=>{
        supportMenuBlock.classList.toggle("support-menu--show");
    
        radioOptions.forEach((radio)=>{ radio.checked = false; });
    
        closeOptionMenu();

        const menu = document.querySelector(".support-window");
        menu.remove();
    });
    //input radio option
    const radioOptions = document.querySelectorAll(".radio-info__radio");
    var lastOption;
    var lastBlock;

    function addBorderElement(newElement, lastElment){
        if(lastElment != undefined)
            lastElment.classList.toggle("support--border");

        newElement.classList.toggle("support--border");
        return newElement;
    }
    radioOptions.forEach((radio)=>{
        radio.addEventListener("click", (event)=>{
            //Add style a block Support
            if(event.target.tabIndex == 1)
                lastBlock = addBorderElement(event.path[3], lastBlock);
            else
                lastBlock = addBorderElement(event.path[4], lastBlock);

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
            window.scrollTo(0, 0);
            const supportWindowsBlock = document.querySelector(".support-window");
            supportWindowsBlock.classList.toggle("support-window--hidden");
            createBlock(supportMenuBlock,TempleteThanksHTML,insertBlockHTML,activeBtnBlockThanks);

            const inputValue = event.path[1].children[0].children[1].value;
            upgradeTargetMoney(parseInt(inputValue,10));
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
//Menu icon mobile
const menuIcon = document.querySelector(".nav-page__image-menu");
menuIcon.addEventListener("click", (event)=>{
    const menuMobile = document.querySelector(".menu");
    menuMobile.classList.toggle("menu--show");
});
//Button "back this proyect" main page
const btnMainPage = document.querySelector("#btn");
btnMainPage.addEventListener("click", (event)=>{
    createBlock(supportMenuBlock,createSupportWindow,insertBlockHTML,activeBlockMenu);
    supportMenuBlock.classList.toggle("support-menu--show");
    window.scrollTo(0, 0);
});