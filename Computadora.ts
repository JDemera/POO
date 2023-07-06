import { IComputadora } from "./Interfaces";
//Esta es clase computadora en donde implementaremos la interface IComputadora
export class Computadora implements IComputadora{
    nombre: String;

    constructor(nombre:String){
        this.nombre=nombre;
    }
}