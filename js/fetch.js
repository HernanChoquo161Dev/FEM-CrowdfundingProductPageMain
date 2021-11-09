function createBlock(container,createHTML,insertHTML,EventHTML){
    fetch("./public/data.json",{
        headers : { 
        'ContentS-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        insertHTML(container, createHTML,EventHTML,data);
    })
    .catch(error => console.log(error));
}