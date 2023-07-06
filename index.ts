import { Laboratorio } from "./Laboratorio";
import { ListaLaboratorio } from "./ListaLaboratorio";
import { Estudiante } from "./Estudiante";
import { Computadora } from "./Computadora";


const listaLaboraotrio= ListaLaboratorio.getInstance();

const Laboratorio1= new Laboratorio('Laboratorio 1', 'Empresarial');
const Laboratorio2= new Laboratorio('Laboratorio 2', 'Logica Avanzada');
const Laboratorio3= new Laboratorio('Laboratorio 3','Retos');

const Computadora1=new Computadora('Computadora 1');
const Computadora2=new Computadora('Computadora 2');
const Computadora3=new Computadora('Computadora 3');

Laboratorio1.AgregarComputadora(Computadora1);
Laboratorio2.AgregarComputadora(Computadora2);
Laboratorio3.AgregarComputadora(Computadora3);

const Estudiante1=new Estudiante('Cristhian', 'Empresarial', Laboratorio1);
Estudiante1.AgregarComputadora(Computadora1);
Estudiante1.AgregarSoftware('Server');

const Estudiante2=new Estudiante('Alexander', 'Logica Avanzada', Laboratorio2);
Estudiante2.AgregarComputadora(Computadora2);
Estudiante2.AgregarSoftware('SQL');

const Estudiante3=new Estudiante('Miguel', 'Retos', Laboratorio3);
Estudiante3.AgregarComputadora(Computadora3);
Estudiante3.AgregarSoftware('Visual Studio');

listaLaboraotrio.AgregarParticipante(Estudiante1);
listaLaboraotrio.AgregarParticipante(Estudiante2);
listaLaboraotrio.AgregarParticipante(Estudiante3);

const participantes=listaLaboraotrio.getParticipantes;
for(const Participante of participantes()){
    console.log(Participante.getObtenerDetalle);
}