"use strict";
class htmlElement{
    constructor(father, child, element){
        this.father = father;
        this.child = child;
        this.element = element;
    }
}
//Work list element html
function createTemplateHtml(compElem){
    if(compElem.length == 2) return { element: compElem[0], class: compElem[1]};
    else return { element: compElem[0], class: compElem[1], url: compElem[2]};
}
function createElement(listAttributes){
    let newElement;
    if(listAttributes){
        let splitAttributes = Object.entries(createTemplateHtml(listAttributes));

        splitAttributes.forEach(([key, value]) => {
            if(key == "element") 
                newElement = document.createElement(value);
            else 
                newElement.setAttribute(key, value);
        });
    }
    return newElement;
}
function insertChildren(father, childList){
    const newFather = father;
    if(childList) childList.forEach((child)=>{ newFather.appendChild(child); });

    return newFather;
}
//work object htmlElement
function builtLevelsBlock(listFather, listChild){
    let result = [];

    let childNum = 1;
    listFather.forEach((father)=>{
        let filterChild = listChild.filter((child)=>{ return child.child == childNum; });
        let mapElementHTML = filterChild.map((elem)=>{ return elem.element; });

        result.push(insertChildren(father.element, mapElementHTML));
        
        childNum++;
    });
    return result;
}
function createHtlmlBlock(levelsNum, father, listChild){
    const blockHtml = document.createDocumentFragment();
    const buildFather = father.element;

    let currentLevel = levelsNum - 1;
    let resultChild = [];
    //code
    for(let a = 0; a < (levelsNum-2); a++){
        let childElement;
        //BUG - arrayObjecthtmlElement
        let fatherElement = listChild.filter((child)=>{return child.father == currentLevel});

        if(a == 0)
            childElement = listChild.filter((child)=>{return child.father == levelsNum});
        else
            childElement = resultChild;
        
        //BUG - arrayElementHTML
        resultChild = builtLevelsBlock(fatherElement, childElement);

        currentLevel--;
    }
    //end code
    return blockHtml.appendChild(insertChildren(buildFather,resultChild));
}

//---------------

const content = new htmlElement(1, 1, createElement(["div","content"]));
const contentList = [
    new htmlElement(2, 1, createElement(["div","content__box-image"])),
    new htmlElement(2, 1, createElement(["div","content__box-text"])),
    new htmlElement(3, 2, createElement(["h1","content__title"])),
    new htmlElement(3, 2, createElement(["p","content__text"])),
    new htmlElement(3, 1, createElement(["img","content__image", "../images/logo.svg"])),
    new htmlElement(3, 1, createElement(["img","content__image", "../images/logo.svg"]))];

document.querySelector("body").appendChild(createHtlmlBlock(4, content, contentList));