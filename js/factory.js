function createElement(Attributes, children){
    let newElement;
    if(Attributes){
        let splitAttributes = Object.entries(Attributes);
  
        splitAttributes.forEach(([key, value]) => {
            if(key == "element") 
                newElement = document.createElement(value);
            else
                newElement.setAttribute(key, value);
        });
  
        if(Array.isArray(children))
          children.forEach((child)=>{ 
            if(child instanceof HTMLElement) newElement.appendChild(child);
            else newElement.appendChild(document.createTextNode(child));
          });
        else
          if(children) newElement.appendChild(document.createTextNode(children));
    }
    return newElement;
}
  
function createBlockThanks(dataJson){
    const boxImage = createElement({element: "div",class:"thanks__box-image"},
                                   [createElement({element:"img",class:"thanks__image",src:"../images/icon-check.svg"},null)]);
    
    const children = [boxImage,
                      createElement({element:"h1",class:"thanks__title"}, dataJson[0].thanks[0]),
                      createElement({element:"p",class:"thanks__text"}, dataJson[0].thanks[1]),
                      createElement({element:"button",class:"btn-support btn-support--thanks"},     dataJson[0].thanks[2])];
                      
    const blockThanks = createElement({element:"div",class:"thanks thanks--show"}, children);
  
    return blockThanks;
}
function createBlockOptions(dataJson){

  const childrenContent = [createElement({element:"img",class:"options__icon",src:"../images/dollar-symbol.png"},null),
  createElement({element:"input",class:"options__support", value:"25",type:"text"},null)];
  const contentInput = createElement({element:"div",class:"options-content-input"},childrenContent);
  const childrenOption = [contentInput, 
                          createElement({element:"button", class:"btn-support btn-support--menu"},null)];
  const blockOptions = createElement({element:"div", class:"options"}, childrenOption);
  return blockOptions;
}
console.log(createBlockOptions(""));
function createRadioInfo(dataJson){

  const optionsChildren = [createElement({element:"input",id:"bamboo-stand",tabindex:"2" ,name:"project-support",value:"",class:"radio-info__radio"},null),
  createElement({element:"label",for:"bamboo-stand",class:"radio-info__title"}, "JSON"),
  createElement({element:"p",class:"radio-info__text"},"JSON")];
  const radioOptions = createElement({element:"div",class:"radio-info__option-box"}, optionsChildren);

  const textAmount = createElement({element:"p",class:"radio-info__amount"},
                     [createElement({element:"span"}, "JSON"), "JSON"])

  const radioChildren = [radioOptions,textAmount];

  const radioInfo = createElement({element:"div", class:"radio-info"},radioChildren);

  return radioInfo;
}
console.log(createRadioInfo(""));
function createBlockSupportOptions(dataJson){

  const boxOptionChildre = [createElement({element:"p", class:"support__options-text"},"JSON"),
                            createBlockOptions("")]

  const contentChildren = [createRadioInfo(""),
                           createElement({element:"div",class:"support__text"},"JSON")];

  const blockSupport = createElement({element:"div", class:"support support--margin"},
                                      [createElement({element:"div", class:"support__content"},contentChildren),
                                      createElement({element:"div",class:"support__box-options"},boxOptionChildre)]);
  return blockSupport;
}
console.log(createBlockSupportOptions(""));
function createBlockSupport(dataJson){
  const radioOption = createElement(
                      {element:"div",class:"radio-info__option-box  radio-info__option-box--margin"},[createElement({element:"input",type:"radio",id:"no-reward",tabindex:"1", name:"project-support",value:"",class:"radio-info__radio"},null),
                      createElement({element:"label",for:"no-reward",class:"radio-info__title"})]);

  const contentChildren = [radioOption,
                           createElement({element:"p",class:"support__text"},"JSON")];

  const blockSupport = createElement({element:"div", class:"support"},
                                      [createElement({element:"div", class:"support__content"},contentChildren)]);
  return blockSupport;
}
console.log(createBlockSupport(""));
function createSupportWindow(){
    let contentImage = createElement({element:"div",class:"support-window__image-box"},
                                          createElement({element:"img",class:"support-window__image"},null));
    let windowChildren = [contentImage, 
                            createElement({element:"h2",class:"support-window__title"},"JSON"),
                            createElement({element:"p",class:"support-window__text"},"JSON"),
                            createBlockSupport(""),
                            createBlockSupportOptions(""),
                            createBlockSupportOptions(""),
                            createBlockSupportOptions("")];
    let windows = createElement({element:"div",class:"support-window"}, windowChildren);       
    return windows;
}
console.log(createSupportWindow(""));

