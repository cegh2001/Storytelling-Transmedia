"use client";
import React, { useState } from "react";

export default function PapyrusStory() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const audio = new Audio("/ac-audio-story.mp3");

  const handleAccept = () => {
    audio.play();
    setIsModalOpen(false);
  };

  const handleDecline = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#f9f5e9] p-4">
      {isModalOpen && (
        <div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#f3e5ab] text-[#3e3b32] p-6 rounded-md shadow-lg w-11/12 max-w-md papyrus">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Permiso para Reproducir Audio
            </h2>
            <p className="mb-6 text-center">
              ¿Deseas permitir la reproducción de audio en esta página para una mejor experiencia?
            </p>
            <div className="flex justify-around">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-[#6b4e32] text-white rounded"
              >
                Sí
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-3xl p-10 bg-[#f3e5ab] text-[#3e3b32] border border-[#d4c4a8] shadow-lg rounded-md relative papyrus">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#6b4e32]">
          Bayek de Siwa: El Nacimiento de una Leyenda
        </h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          Prólogo: Un Medjay en Siwa
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Bayek, un Medjay (protector) de Siwa, vive una vida pacífica junto a
          su esposa Aya y su hijo Khemu. Como Medjay, es respetado y admirado
          por su pueblo, al que protege de las amenazas del desierto y los
          conflictos internos. Su vida cambia drásticamente cuando una tragedia
          sacude su mundo, desencadenando una sed de venganza que lo llevará a
          recorrer todo Egipto.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          Capítulo 1: La Tragedia y la Búsqueda de la Verdad
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          La muerte de Khemu a manos de una conspiración oculta marca un antes y
          un después en la vida de Bayek. Determinado a descubrir la verdad y
          hacer justicia, comienza una investigación que lo llevará a conocer
          las sombras que acechan en el poder. A medida que avanza, descubre una
          orden secreta que manipula los hilos del poder en Egipto, una orden
          que está detrás de la muerte de su hijo y de muchos otros inocentes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          Capítulo 2: El Nacimiento de un Asesino
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Junto a Aya, Bayek emprende un viaje por todo Egipto para dar caza a
          los miembros de esta orden secreta. En su camino, se cruzan con
          personajes históricos como Cleopatra y Julio César, mientras
          desentrañan una conspiración que amenaza el futuro de Egipto. A medida
          que se adentran en este mundo oscuro, Bayek y Aya desarrollan
          habilidades letales y una profunda conexión, forjando así los
          cimientos de una nueva Hermandad.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          Capítulo 3: La Formación de la Hermandad
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          A lo largo de su viaje, Bayek y Aya se dan cuenta de que están
          luchando contra un sistema corrupto y opresivo. Comienzan a reclutar a
          otros que comparten su visión, formando una red de individuos
          dispuestos a luchar por un mundo mejor. Con cada enemigo derrotado, la
          leyenda de Bayek crece, y su influencia se extiende por todo Egipto.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          Capítulo 4: El Legado de Bayek
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          La culminación de la venganza de Bayek llega con la caída de los
          líderes de la orden secreta. Sin embargo, su lucha no ha terminado.
          Bayek y Aya comprenden que para cambiar el mundo, necesitan algo más
          que violencia. Así, deciden crear una Hermandad, una organización
          secreta dedicada a proteger a los inocentes y luchar por la justicia.
          Bayek, el Medjay de Siwa, se convierte así en el padre de los Ocultos,
          los precursores de los Asesinos.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          Epílogo: Un Nuevo Comienzo
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          A pesar de haber logrado su venganza, Bayek y Aya se enfrentan a una
          nueva realidad. Han perdido a su hijo y han visto el horror de la
          guerra. Sin embargo, su amor mutuo y su compromiso con la Hermandad
          les dan la fuerza para seguir adelante. Bayek, ahora un hombre
          cambiado, se dedica a entrenar a nuevas generaciones de asesinos,
          asegurando así la supervivencia de su legado.
        </p>
        <h2 className="flex justify-center items-center text-2xl font-semibold mt-8 mb-4 text-[#6b4e32]">
          ¿Quieres saber más de Bayek y los ocultos?
        </h2>
        <p className="flex justify-center items-center gap-1.5 text-lg leading-relaxed text-justify">
          Clickea este enlace
          <a
            href="https://youtu.be/DCBEEm4EFwA?si=gy9BtST9k4PhVfM9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3e3b32] underline"
          >
            aquí.
          </a>
        </p>
      </div>
    </main>
  );
}
