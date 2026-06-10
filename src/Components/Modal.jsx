export default function Modal({ abierto, cerrar, titulo, descripcion }) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          {titulo}
        </h2>

        <p className="text-gray-600 mb-6">
          {descripcion}
        </p>

        <button
          onClick={cerrar}
          className="bg-[#4dacd8] text-white px-6 py-2 rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}