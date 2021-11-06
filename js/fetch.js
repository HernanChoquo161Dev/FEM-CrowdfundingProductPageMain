function createBlock(blockFather,createHTML,insertHTML){
    fetch("./public/data.json",{
        headers : { 
        'ContentS-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        insertHTML(blockFather, createHTML, data);
    })
    .catch(error => console.log(error));
}