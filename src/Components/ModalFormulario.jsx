export default function ModalFormulario({
  abierto,
  onClose,
  titulo,
  url,
}) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 text-white px-4 py-2 rounded-lg z-10"
        >
          ✕
        </button>

        <h2 className="absolute top-3 left-4 font-bold text-lg z-10">
          {titulo}
        </h2>

        <iframe
          src={url}
          title={titulo}
          className="w-full h-full pt-14"
        />
      </div>
    </div>
  );
}