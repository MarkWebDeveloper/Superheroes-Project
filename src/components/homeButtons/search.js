function search(event) {
event.preventDefault();
const query = document.getElementById("query").value;

function buscarPorNombre(nombre, characters) {
for (let i = 0; i < characters.length; i++) {
if (characters[i].getName() === nombre) {
return characters[i];
}
}
return null;
}
}
