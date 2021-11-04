class htmlElement{
    constructor(father, child, element){
        this.father = father;
        this.child = child;
        this.element = element;
    }
}
//Work list element html
function createTemplateHtml(compElem){
    if(compElem.lenght == 2) return { name: compElem[0], class: compElem[1]};
    else return { name: compElem[0], class: compElem[1], url: compElem[2]};
}
function createElement(listAttributes){
    let newElement;
    if(listAttributes){
        let templateAttributes = createTemplateHtml(listAttributes);
        let splitData = Object.entries(templateAttributes);
        splitData.forEach(([key, value]) => {
            if(key == "name") newElement = document.createElement(value);
            else if(value !== null) newElement.setAttribute(key, value);
        });
    }
    return newElement;
}
function insertChildren(father, childList){
    const newFather = father;
    if(childList){
        childList.forEach((child)=>{
            newFather.appendChild(child);
        });
    }
    return newFather;
}
//work object htmlElement
function builtLevelsBlock(listFather, listChild, currentLevel){
    let result = [];
    let childNum = 1;

    listFather.forEach((father)=>{
        let levelChild = listChild.filter((child)=>{ 
            return child.child == childNum;});

        let mapElementHTML = levelChild.map((elem)=>{ return elem.element;});
        result.push(insertChildren(father.element,mapElementHTML));
        
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
        let fatherElement = listChild.filter((child)=>{return child.father == currentLevel});

        if(a == 0){
            childElement = listChild.filter((child)=>{return child.father == levelsNum});
            resultChild = builtLevelsBlock(fatherElement, childElement, currentLevel);
        }
        else{
            childElement = resultChild;
            resultChild = builtLevelsBlock(fatherElement, childElement, currentLevel);
        }
        currentLevel--;
    }
    //end code
    return blockHtml.appendChild(insertChildren(buildFather,resultChild));
}

//---------------

const content = new htmlElement(1, 1, createElement(["div","content"]));
const contentList = [
    new htmlElement(2, 1, createElement(["div","content"])),
    new htmlElement(2, 1, createElement(["div","content"])),
    new htmlElement(3, 2, createElement(["h1","content"])),
    new htmlElement(3, 1, createElement(["img","content"])),
    new htmlElement(3, 1, createElement(["img","content"]))];

const testA = contentList.filter((child)=>{return child.father == 2});
const testB = testA.map((elem)=>{ return elem.element;})
console.log(testA);
console.log(testB);
document.querySelector("body").appendChild(testB[0]);
document.querySelector("body").appendChild(createHtlmlBlock(3, content, contentList));