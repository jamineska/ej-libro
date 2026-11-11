/*Debes crear una clase Libro que represente un libro dentro de la biblioteca.
Esta clase debe tener:

    Propiedades:
        titulo: nombre del libro
        autor: autor del libro
        isbn: identificador único del libro
        _prestado: estado del libro (encapsulado con _ para indicar que es privado)

    Métodos:
        prestar(): cambia el estado del libro a prestado
        devolver(): cambia el estado del libro a disponible
        getEstado(): retorna si el libro está prestado o disponible

Ejemplo de uso:

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
libro.getEstado(); // "Disponible"
libro.prestar();
libro.getEstado(); // "Prestado"*/


//Empecemos

//1º creamos la definición de la clase Libro 
class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = false; // "_" propiedad privada por convención.
    }

    prestar() {
        this._prestado = true;
    }

    devolver() {
        this._prestado = false;
    }

    getEstado() {
      if (this._prestado === true) {
        return "Prestado";
      } else {
        return "Disponible";
      }
    }
}

//2ª iniciamos programa
document.addEventListener("DomContentLoaded", () => {
//3º cogemos los elementos del html

const uiTitulo = document.querySelector("#libro-titulo");
const uiAutor = document.querySelector("#libro-autor");
const uiIsbn = document.querySelector("#libro-isbn");
const uiEstado = document.querySelector("#libro-estado");
const btnPrestar = document.querySelector("#btn-prestar");
const btnDevolver = document.querySelector("#btn-devolver");

//4º instacia del ojeto (libro actual)
const libroActual = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
})

//5º creamos la función para pintar nustro dato y cambiar de color de la etiqueta y el bloqueo de los botones según corresponda.
function renderizarFicha() {
    uiTitulo.textContent = libroActual.titulo;
    uiAutor.textContent = libroActual.autor;
    uiIsbn.textContent = libroActual.isbn;

    const estado = libroActual.getEstado();
    uiEstado.textContent = estado;

    if (estado === "Disponible") {
        uiEstado.className = "estado disponible";
        btnPrestar.disabled = false;
        btnDevolver.disabled = true;
    } else {
        uiEstado.className = "estado prestado";
        btnPrestar.disabled = true;
        btnDevolver.disabled = false;
    }
}


//6º eventos de interacción (clicks)


//7ª pintar la ficha




