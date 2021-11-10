function createBlock(container,createHTML,insertHTML,eventHTML){
    fetch("./public/data.json",{
        headers : { 
        'ContentS-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        insertHTML(container, createHTML,eventHTML,data);
    })
    .catch(error => console.log(error));
}