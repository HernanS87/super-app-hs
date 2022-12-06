let firstScreen = document.getElementById('firstScreen')
let add = document.getElementById('add');

// CONTENIDO DEL POPUP
let popUpScreen = document.getElementById('popUpScreen');
let popup = document.getElementById('popup');
let closePopUp = document.getElementById('close-popup');
let save = document.getElementById('save');
let nameProd = document.getElementById('nameProd');
let typeProd = document.getElementById('typeProd');
let descriptionProd = document.getElementById('descriptionProd');


// CONTENDO DE LA LISTA
let listScreen = document.getElementById('listScreen');
let listContainer = document.getElementById('list-container');

// Pantalla de información
let infoScreen_modal = document.getElementById('infoScreen_modal');
let infoScreen = document.getElementById('infoScreen');
let closeInfoScreen = document.getElementById('close-infoScreen');
let imgInfo = document.getElementById('imgInfo');
let nameInfo = document.getElementById('nameInfo');
let descriptionInfo = document.getElementById('descriptionInfo');

// Función para abrir el popUp

let showPopUp = () => {
  popUpScreen.style.display = 'block';
  typeProd.value = '';
  popup.style.display = 'flex';
}


// Función para cerrar el popUp

let close = () => {
  popup.style.display = 'none';
  popUpScreen.style.display = 'none';
}


// Función para crear los items

let saveInfo = () => {
    let nameElem = nameProd.value;
    let typeElem = typeProd.value;
    let descrptionElem = descriptionProd.value;

    if (nameElem == '') {
      alert('No olvides el nombre del producto 😉')
  } else if (typeElem == '') {
      alert('No olvides elegir la categoría 😉')
  } else {
      let li = document.createElement('li');
      let divItem = document.createElement('div');
      let img = document.createElement('img');
      let h2 = document.createElement('h2')

      img.setAttribute('src', typeElem);
      h2.innerHTML = nameElem;

      divItem.appendChild(img);
      divItem.appendChild(h2);
      li.appendChild(divItem);
      li.appendChild(deleteItem())
      listContainer.appendChild(li);


// BOTON DIV(añade la información a los elementos de la infoScreen)

      divItem.addEventListener('click', function() {

        imgInfo.setAttribute('src', typeElem);
        nameInfo.innerHTML = nameElem;
        descriptionInfo.innerHTML = descrptionElem;

        infoScreen_modal.style.display = 'block';
        infoScreen.style.display = 'flex';
    })


    // Acá continúa la función para crear los items

      popup.style.display = 'none';
      popUpScreen.style.display = 'none';
      firstScreen.style.display = 'none';
      listScreen.style.display = 'flex';

      nameProd.value = '';
      typeProd.value = '';
      descriptionProd.value = '';
  }
}


    // Función para borrar items

    let deleteItem = () => {
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';

      deleteBtn.addEventListener('click', (e) => {
        let item = e.target.parentElement;

        let answer = confirm('¿Estas seguro que quieres eliminar este producto?');
        if (answer) {
          listContainer.removeChild(item);
          let items = document.querySelectorAll("li");
  
          if (items.length === 0) {
            listScreen.style.display = 'none';
            firstScreen.style.display = 'flex';
          }
        }
        })
      return deleteBtn;
    }


    // Función para cerrar la infoScreen


let closeInS = () => {
  infoScreen_modal.style.display = 'none';
  infoScreen.style.display = 'none';
}

add.addEventListener('click', showPopUp);
closePopUp.addEventListener('click', close);
save.addEventListener('click', saveInfo);
closeInfoScreen.addEventListener('click', closeInS)