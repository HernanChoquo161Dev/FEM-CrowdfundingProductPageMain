export function createElement(name, props, children) {
    const element = document.createElement(name);
  
    //instanceof
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/instanceof
    //https://flexiple.com/instanceof-javascript/
    if (children instanceof HTMLElement) {
      element.appendChild(children);
    } else if (Array.isArray(children)) {
        //forEach
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      children.forEach(child => element.appendChild(child));
    } else {
      element.appendChild(document.createTextNode(children));
    }
  
    attachProps(element, props);
  
    return element;
  }
  
  //agregar propiedades a los elementos HTML
  function attachProps(element, props) {
      //typeof
      //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof
      //https://www.w3schools.com/js/js_typeof.asp

    //Verificando si el pararametro es un objeto
    //Y si es un objeto deberia devolver true debido al concepto de truthy de valores booleanos
    if (typeof props === "object" && props) {
        //entries
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        //https://www.w3schools.com/jsref/jsref_entries.asp
      const entries = Object.entries(props);
        //setAttribute
        //https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute
        //https://www.w3schools.com/jsref/met_element_setattribute.asp
      entries.forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
  }
  
  
getUsers().then(res => {
    const users = res.map(user => {
      const { city, street, suite } = user.address;
      const address = street + " " + suite + ", " + city;
  
      return createElement("li", { class: "user", id: "user" + user.id }, [
        createElement("p", { class: "user-name" }, [
          createElement("b", null, user.name),
          createElement("span", null, " -- " + user.username)
        ]),
        createElement("address", null, address)
      ]);
    });
  
    const userList = createElement("ul", { class: "user-list" }, users);
  
    app.appendChild(userList);
  });