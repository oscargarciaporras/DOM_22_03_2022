
let h1 = document.createElement("H1");
let texto = document.createTextNode("Miguel Angel Castro Escamilla");

h1.id = "MyId";
h1.classList.add("colorH1");

// h1.append(texto); //Javascript
// h1.innerText = texto.nodeValue; //Javascript 2
h1.insertAdjacentText("beforeend", texto.nodeValue);

// document.body.append(h1);//Javascript
// document.body.innerHTML = h1.outerHTML; //Javascript 2

document.body.insertAdjacentElement("afterbegin", h1);

console.log(h1);
console.dir(h1);
