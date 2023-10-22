let main = document.querySelector('main#main');
if (main) {
    main.parentNode.removeChild(main);
}

let newHeader = document.createElement('h1');
newHeader.id = "victory";

newHeader.innerHTML = "Maliha is the champion";

document.body.appendChild(newHeader);
