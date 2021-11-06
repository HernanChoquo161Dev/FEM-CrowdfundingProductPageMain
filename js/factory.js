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
                                   [createElement({element:"img",class:"thanks__image",src:"./images/icon-check.svg"},null)]);
    
    const children = [boxImage,
                      createElement({element:"h1",class:"thanks__title"}, dataJson[0].thanks[0]),
                      createElement({element:"p",class:"thanks__text"}, dataJson[0].thanks[1]),
                      createElement({element:"button",class:"btn-support btn-support--thanks"},     dataJson[0].thanks[2])];
                      
    const blockThanks = createElement({element:"div",class:"thanks thanks--show"}, children);
  
    return blockThanks;
}
function createBlockOptions(dataJson){

  const childrenContent = [createElement({element:"img",class:"options__icon",src:"./images/dollar-symbol.png"},null),
  createElement({element:"input",class:"options__support", value:"25",type:"text"},null)];
  const contentInput = createElement({element:"div",class:"options-content-input"},childrenContent);
  const childrenOption = [contentInput, 
                          createElement({element:"button", class:"btn-support btn-support--menu"},dataJson.options[1])];
  const blockOptions = createElement({element:"div", class:"options"}, childrenOption);
  return blockOptions;
}
function createRadioInfo(dataJson, textFor){

  const optionsChildren = [createElement({element:"input",type:"radio",id:textFor,tabindex:"2" ,name:"project-support",value:"",class:"radio-info__radio"},null),
  createElement({element:"label",for:textFor,class:"radio-info__title"}, dataJson.radio[0]),
  createElement({element:"p",class:"radio-info__text"},dataJson.radio[1])];
  const radioOptions = createElement({element:"div",class:"radio-info__option-box"}, optionsChildren);

  const textAmount = createElement({element:"p",class:"radio-info__amount"},
                     [createElement({element:"span"}, dataJson.radio[2]), dataJson.radio[3]])

  const radioChildren = [radioOptions,textAmount];

  const radioInfo = createElement({element:"div", class:"radio-info"},radioChildren);

  return radioInfo;
}
function createBlockSupportOptions(dataJson,textFor){

  const boxOptionChildre = [createElement({element:"p", class:"support__options-text"},
                            dataJson.options[0]),createBlockOptions(dataJson)]

  const contentChildren = [createRadioInfo(dataJson, textFor),
                           createElement({element:"div",class:"support__text"},dataJson.text)];

  const blockSupport = createElement({element:"div", class:"support support--margin"},
                                      [createElement({element:"div", class:"support__content"},contentChildren),
                                      createElement({element:"div",class:"support__box-options"},boxOptionChildre)]);
  return blockSupport;
}
function createBlockSupport(dataJson){
  const radioOption = createElement(
                      {element:"div",class:"radio-info__option-box  radio-info__option-box--margin"},[createElement({element:"input",type:"radio",id:"no-reward",tabindex:"1", name:"project-support",value:"",class:"radio-info__radio"},null),
                      createElement({element:"label",for:"no-reward",class:"radio-info__title"}, dataJson[0])]);

  const contentChildren = [radioOption,
                           createElement({element:"p",class:"support__text"},dataJson[1])];

  const blockSupport = createElement({element:"div", class:"support"},
                                      [createElement({element:"div", class:"support__content"},contentChildren)]);
  return blockSupport;
}
function createSupportWindow(dataJson){
  console.log(dataJson);
  console.log(dataJson[0].supportCustom[0].options[0]);
    let contentImage = createElement({element:"div",class:"support-window__image-box"},
                                          [createElement({element:"img", 
                                          src:"./images/icon-close-modal.svg",
                                          class:"support-window__image"},null)]);
    let windowChildren = [contentImage, 
                            createElement({element:"h2",class:"support-window__title"},dataJson[0].menu[0]),
                            createElement({element:"p",class:"support-window__text"},dataJson[0].menu[1]),
                            createBlockSupport(dataJson[0].supportNormal),
                            createBlockSupportOptions(dataJson[0].supportCustom[0],""),
                            createBlockSupportOptions(dataJson[0].supportCustom[1],""),
                            createBlockSupportOptions(dataJson[0].supportCustom[2],"")];
    let windows = createElement({element:"div",class:"support-window"}, windowChildren);       
    return windows;
}

