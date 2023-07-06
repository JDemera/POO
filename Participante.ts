import { IParticipante } from "./Interfaces";
//Esta sera nuestra clase base en donde implementaremos la interface IParticipante
export class Participante implements IParticipante{
    protected nombre:String;
    protected modalidad:String;

    constructor(nombre:String, modalidad:String){
        this.nombre=nombre;
        this.modalidad=modalidad;
    }
//Este metodo es para obtener detalle del participante en el concurso
//Y tambien devuelve una descripcion del participante
    public getObtenerDetalle(): String {
        return `Nombre del participante: ${this.nombre}\nModalidad del concurso: ${this.modalidad}`;
    }
}