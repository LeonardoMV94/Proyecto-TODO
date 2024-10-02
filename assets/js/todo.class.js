class Tarea {
    constructor(titulo, estado) {       
        this.titulo = titulo;
        this.estado = estado; // boolean
    }

    getTitulo(){
        return this.titulo
    }

    getEstado() {
        return this.estado
    }

    setEstado() {
        this.estado = !this.estado
    }

    setTitulo(titulo) {
        this.titulo = titulo
    }
}

export default Tarea


