function createElement(element, attributes, children){
  if(element){
    let newElement = createSimpleElement(element,attributes);

    if(Array.isArray(children))
      children.forEach((child)=>{ 
        if(child instanceof HTMLElement) 
          newElement.appendChild(child);
        else 
          newElement.appendChild(document.createTextNode(child));
    });
    else
      if(children && !(child instanceof HTMLElement)) 
        newElement.appendChild(document.createTextNode(children));
    return newElement;
  }
  else return null;
}
function createSimpleElement(element, attributes){
  if(element){
    let newElement = document.createElement(element);
    if(attributes){
      let splitAttributes = Object.entries(attributes);

      splitAttributes.forEach(([key, value]) => { newElement.setAttribute(key, value); });
    }
    return newElement;
  }
  else
    return null;
}
function TempleteThanksHTML(dataJson){
  const container = createSimpleElement("div", {class:"thanks thanks--show"});
  const templete = `
    <div class="thanks__box-image">
    <img class="thanks__image" src="./images/icon-check.svg"></img>
    </div>
    <h2 class="thanks__title">${dataJson[0].thanks[0]}</h2>
    <p class="thanks__text">${dataJson[0].thanks[1]}</p>
    <button class="btn-support btn-support--thanks">${dataJson[0].thanks[2]}</button>
  `;
  container.innerHTML = templete;
  return container;
}
function createBlockOptions(dataJson, option){
  const container = createSimpleElement("div", {class:"options"});
  const templete = `
    <div class="options-content-input">
      <img class="options__icon" src="./images/dollar-symbol.png"></img>
      <input class="options__support" type="text" value="25">
    </div>
    <button class="btn-support btn-support--menu">${dataJson.options[1]}</button>
  `;
  container.innerHTML = templete;
  const optionTemplete = `<div class="options">${templete}</div>`;
  return option ? container : optionTemplete;
}
//-----
function stringAttributes(attributes){
  const splitAttributes = Object.entries(attributes);
  let stringAttributes = "";

  splitAttributes.forEach(([key, value]) => { stringAttributes+= `${key}:${value} `});

  return stringAttributes;
}
//-----
function createRadioInfo(dataJson, option){
  const container = createSimpleElement("div", {class:"radio-info"});
  const templete = `
    <div class="radio-info__option-box">
      <input type="radio" id="" tabindex="2" name="project-support" value="" class="radio-info__radio">
      <label for="" class="radio-info__title">${dataJson.radio[0]}</label>
      <p class="radio-info__text">${dataJson.radio[1]}</p>
    </div>
    <p class="radio-info__amount"><span>${dataJson.radio[2]}</span> ${dataJson.radio[3]}</p>
  `;
  container.innerHTML = templete;
  const optionTemplete = `<div class="radio-info">${templete}</div>`;
  return option ? container : optionTemplete;
}
function createBlockSupportOptions(dataJson,option){
  const container = createSimpleElement("div", {class:"support support--margin"});
  const templete = `
    <div class="support__content">
      ${createRadioInfo(dataJson, false)}
      <div class="support__text">${dataJson.text}</div>
    </div>
    <div class="support__box-options support__box-options--show">
      <p class="support__options-text">${dataJson.options[0]}</p>
      ${createBlockOptions(dataJson, false)}
    </div>
  `;
  container.innerHTML = templete;
  const optionTemplete = `<div class="support support--margin">${templete}</div>`;
  return option ? container : optionTemplete;
}
function createBlockSupport(dataJson, option){
  const container = createSimpleElement("div", {class:"support"});
  const templete = `
    <div class="support__content">
    <div class="radio-info__option-box  radio-info__option-box--margin">
      <input type="radio" id="no-reward" tabindex="1" name="project-support" value="" class="radio-info__radio">
      <label for="no-reward" class="radio-info__title">${dataJson[0]}</label>
    </div>
    <p class="support__text">${dataJson[1]}</p>
    </div>
  `;
  container.innerHTML = templete;
  const optionTemplete = `<div class="support">${templete}</div>`;
  return option ? container : optionTemplete;
}
function createSupportWindow(dataJson,option){
    const container = createSimpleElement("div", {class:"support-window"});
    const templete = `
      <div class="support-window__image-box">
        <img class="support-window__image" src="./images/icon-close-modal.svg"></img>
      </div>
      <h2 class="support-window__title">${dataJson[0].menu[0]}</h2>
      <p class="support-window__text">${dataJson[0].menu[1]}</p>
      ${createBlockSupport(dataJson[0].supportNormal,"",false)}
      ${createBlockSupportOptions(dataJson[0].supportCustom[0], false)}
      ${createBlockSupportOptions(dataJson[0].supportCustom[1], false)}
      ${createBlockSupportOptions(dataJson[0].supportCustom[2], false)}
    `;
    container.innerHTML = templete;
    const optionTemplete = `<div class="support-window">${templete}</div>`;
    return option ? container : optionTemplete;
}


