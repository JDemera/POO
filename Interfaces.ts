//Esta seran nuestras interfaces que implementaremos en las respectivas clases
//En la interface IParticipante se aplica el polimorfismo ya que el metodo getObtenerDetalle
//Se implementa en las clases Paricipantes y esta a su vez tambien se implementa en la clase Estudiante
//Ya que la clase Participante esta heredando a la subclase que es Estudiante
export interface IParticipante{
    getObtenerDetalle(): String
}

export interface ILaboratorio{
    nombre:String;
    getSoftwarelista():String[];
}

export interface IComputadora{
    nombre:String;
}