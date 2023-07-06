import {  ILaboratorio } from "./Interfaces";
import { Participante } from "./Participante";
import { IComputadora } from "./Interfaces";
//Creamos la clase estudiante que hereda de participante 
//Ya que hereda propiedades y el comportamiento de la clase Participante y a su vez tiene 
//Una asociacion con las interfaces ILaboratorio e IComputadora
export class Estudiante extends Participante{
    protected laboratorio:ILaboratorio;
    protected computadora:IComputadora;
    protected software:String[];

//Creamos un constructor para agregar el laboratorio y el software
//Tambien utilizaremos super para poder llamar los atributos de la clase padre
    constructor(nombre:String, modalidad:String, laboratorio:ILaboratorio){
        super(nombre, modalidad)
        this.laboratorio=laboratorio;
        this.software=[];
    }
//Aqui se va a seleccionar la computadora del estudiante que esta participando
    public AgregarComputadora(computadora:IComputadora): void{
        this.computadora=computadora;
    }
//Aqui se va agragar el software de la computadora
    public AgregarSoftware(software:String):void{
        this.software.push(software);
    }
//Este metodo es para incluir información adicional sobre el laboratorio, la computadora y el software
    public getObtenerDetalle(): String {
        const InformacionParticipante=super.getObtenerDetalle();
        const InformacionLaboratorio=`Laboratorio: ${this.laboratorio.nombre}`;
        const InformacionComputadora=`Computadora: ${this.computadora.nombre}`;
        const SoftwareLaboratorio=`Software del laboratorio: ${this.laboratorio.getSoftwarelista().join(`,`)}`;
        const SoftwareEstudiante=`Software del estudiante: ${this.software.join(`,`)}`;
        return `${InformacionParticipante}\n ${InformacionLaboratorio}\n ${InformacionComputadora}
        \n ${SoftwareLaboratorio}\n ${SoftwareEstudiante}`;
    }
}