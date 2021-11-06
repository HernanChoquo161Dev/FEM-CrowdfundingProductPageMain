function createBlock(blockFather,createHTML,insertHTML,activeHTML){
    fetch("./public/data.json",{
        headers : { 
        'ContentS-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        insertHTML(blockFather, createHTML,activeHTML,data);
    })
    .catch(error => console.log(error));
}