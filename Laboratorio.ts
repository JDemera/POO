import {  ILaboratorio } from "./Interfaces";
import {  IComputadora } from "./Interfaces";
//Esta es la clase laboratorio donde implementaremos nuestra interface ILaboratorio
//Esta clase tiene agregacion donde se agrega los objetos de tipo IComputadora
//A travez del metodo AgregarComputadora
export class Laboratorio implements ILaboratorio{
    public nombre:String;
    protected categoria:String;
    protected computadora:IComputadora[];
    protected softwarelista:String[];

    constructor(nombre:String, categoria:String){
        this.nombre=nombre;
        this.categoria=categoria;
        this.computadora=[];
    //Software instalado en el laboratorio
        this.softwarelista=[`Software A`, `Software B`];
    }
//Este metodo nos ayuda agregar las computadoras disponibles que estan el en laboratorio
    public AgregarComputadora(computadora:IComputadora):void{
        this.computadora.push(computadora);
    }
//Este metodo nos ayudara a obtener la lista del software
    public getSoftwarelista(): String[] {
        return this.softwarelista;
    }
}