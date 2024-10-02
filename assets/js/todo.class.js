class Tarea {
    constructor(titulo, estado) {       
        this.titulo = titulo;
        this.estado = estado; // porhacer | listo
    }

    getTitulo(){
        return this.titulo
    }

    getEstado() {
        return this.estado
    }
}

export default Tarea


