import { useState } from "react";
import ModalFormulario from "./ModalFormulario";
import yaninaIturre from "../assets/yanina.jpeg";

  import {
  Users,
  Lightbulb,
  Bus,
  GraduationCap,
  Laptop,
  Trophy,
  Trees,
  Briefcase,
  Building2,
  SquareUserRound,
  Clapperboard,
  Wallet,
  Handshake 
} from "lucide-react";


import ejes from "./ejes.jsx";

export default function Jornada() {

  const formularios = {
  registro: {
    titulo: "Registro",
    url: "https://forms.fillout.com/t/d2MWbeYbZXus",
  },
  propuestas: {
    titulo: "Compartir propuesta",
    url: "https://forms.fillout.com/t/drWZqdQae1us",
  },
  encuesta: {
    titulo: "Encuesta de evaluación",
    url: "https://forms.fillout.com/t/whzzX5xAATus",
  },
};

  const [ejeSeleccionado, setEjeSeleccionado] = useState(null);
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
{/* HERO */}
<section className="relative overflow-hidden">
  <div className="relative">
    <img
      src={yaninaIturre}
      alt="Yani Iturre"
      className="w-full max-h-[400px] object-cover"
    />
  </div>


  {/* CONTENIDO */}
  <div className="bg-white py-12">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        JORNADA DE PARTICIPACIÓN JUVENIL
      </h1>

      <p
        className="text-2xl md:text-3xl mt-4 text-[#2699d0]"
        
      >
        Tu voz cuenta, tus ideas transforman Fernández
      </p>

      <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto text-justify">
       Bienvenidos a la primera Jornada de Participación Juvenil, un espacio pensando para compartir ideas y crecer como ciudad. A continuación te invitamos a registrarte como asistente de la jornada.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

        <button 
         className="
            bg-[#2699d0]
            hover:bg-[#1f84b5]
            text-white
            font-bold
            px-8
            py-4
            rounded-full
            shadow-lg
            transition
          "
        onClick={()=>setModal('registro')}>
          Registrarse
        </button>

        

        <a
          href="#ejes"
          className="
            bg-[#e81f25]
            hover:bg-red-700
            text-white
            font-bold
            px-8
            py-4
            rounded-full
            shadow-lg
            transition
          "
        >
          Ya me registré
        </a>

      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-50 rounded-2xl p-5 shadow">
          <div className="text-3xl font-bold text-[#2699d0]">10</div>
          <div className="text-gray-600">
            Ejes temáticos
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 shadow">
          <div className="text-3xl font-bold text-[#e81f25]">
            +100
          </div>
          <div className="text-gray-600">
            Jóvenes convocados
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 shadow">
          <div className="text-3xl font-bold text-[#2699d0]">
            2026
          </div>
          <div className="text-gray-600">
            Pensando el futuro
          </div>
        </div>

      </div>
    </div>
  </div>
</section>



      {/* DESCRIPCION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
          <Lightbulb
            size={50}
            className="mx-auto text-yellow-500 mb-4"
          />

          <h2 className="text-5xl font-bold mb-4">
            ¿Qué es esta jornada?
          </h2>

          <p className="text-gray-600 text-lg text-justify">
             Queremos escuchar las propuestas de los jóvenes para construir
        juntos el futuro de nuestra ciudad y nuestros parajes.
        Participá de los ejes temáticos y compartí tus ideas para que formen parte de la transformación de nuestra comunidad.
          </p>
        </div>
      </section>

      {/* EJES */}
      <section
        id="ejes"
        className="max-w-6xl mx-auto px-6 pb-20"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Ejes Temáticos
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Vamos a trabajar en pequeños grupos los siguientes ejes temáticos.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ejes.map((eje, index) => (
            
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="text-[#2699d0] mb-4">
                {eje.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {eje.titulo}
              </h3>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setEjeSeleccionado(eje)}
                  className="bg-gray-200 text-gray-700 px-5 py-3 rounded-xl hover:bg-gray-300 transition"
                >
                  Ver información
                </button>

                <button
                 className="bg-[#2699d0] text-white px-5 py-3 rounded-xl hover:opacity-90 transition text-center"
                onClick={()=>setModal('propuestas')}>
                     Compartir propuesta
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

         
      {/* ENCUESTA */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            Encuesta de Jornada
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Tu opinión nos ayuda a evaluar la jornada y posibles temáticas a tratar en próximas instancias. 
          </p>

 
          
          <div className="text-center">
     

            <button className="bg-green-800 text-white px-8 py-4 rounded-full font-bold" onClick={()=>setModal('encuesta')}>
              Completar Encuesta
            </button>
          </div>
        </div>
      </section>

  

      {/* MODAL
      {ejeSeleccionado && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-xl w-full rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              {ejeSeleccionado.titulo}
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
              {ejeSeleccionado.descripcion}
            </p>

            <div className="flex flex-col md:flex-row gap-3">
             
              <button
                className="bg-[#2699d0] text-white px-6 py-3 rounded-xl text-center"
                onClick={()=>setModal('propuestas')}
              >Enviar propuesta</button>

              <button
                onClick={() => setEjeSeleccionado(null)}
                className="bg-red-500 px-6 py-3 rounded-xl text-amber-50"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}



{/* MODAL */}
{ejeSeleccionado && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div className="bg-white max-w-3xl w-full max-h-[90vh] rounded-3xl shadow-2xl flex flex-col">

      {/* Cabecera */}
      <div className="p-8 pb-4">
        <h2 className="text-3xl font-bold">
          {ejeSeleccionado.titulo}
        </h2>
      </div>

      {/* Contenido con scroll */}
      <div className="px-8 overflow-y-auto flex-1">
        <p className="text-gray-600 leading-relaxed whitespace-pre-line text-justify">
          {ejeSeleccionado.descripcion}
        </p>
      </div>

      {/* Botones fijos */}
      <div className="p-8 pt-4 flex flex-col md:flex-row gap-3 ">
        <button
          className="bg-[#2699d0] text-white px-6 py-3 rounded-xl"
          onClick={() => setModal("propuestas")}
        >
          Enviar propuesta
        </button>

        <button
          onClick={() => setEjeSeleccionado(null)}
          className="bg-red-500 text-white px-6 py-3 rounded-xl"
        >
          Cerrar
        </button>
      </div>

    </div>
  </div>
)}

      <ModalFormulario
  abierto={!!modal}
  onClose={() => setModal(null)}
  titulo={modal ? formularios[modal].titulo : ""}
  url={modal ? formularios[modal].url : ""}
/> 

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto text-center px-6">
          <p>
            Jornada de Participación Juvenil - Frente Cívico - Fernández • Santiago del
            Estero
          </p>
        </div>
      </footer>
    </div>
  );
}

