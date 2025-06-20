import { Heart } from 'lucide-react';
import image2 from '../assets/images/image2.jpg';

export default function Info() {
  return (
    <section className="bg-background-light dark:bg-background-dark py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Texto sobre os noivos */}
        <div className="md:w-1/2 text-left">
          {/* Título com coração */}
          <div className="flex items-center mb-4">
            <h2 className="text-4xl sm:text-6xl font-tangerine text-primary-light">Our Story</h2>
            <Heart className="text-primary-light w-8 h-8 ml-3 sm:ml-4" fill="currentColor" />
          </div>

          {/* Parágrafos */}
          <p className="text-text text-base sm:text-lg font-sans leading-relaxed">
            Ana and Thiago met on an autumn afternoon, when fate decided to bring together two hearts destined to walk side by side.
            Since then, every smile, every hug, and every shared dream has strengthened the love between them.
          </p>
          <p className="text-text text-base sm:text-lg font-sans mt-4 leading-relaxed">
            Now, with great emotion, they invite you to witness the next chapter of this beautiful story: their wedding day.
            A celebration of love, partnership, and joy that will only be complete with your presence.
          </p>

          {/* Botão de Confirmar Presença */}
          <div className="mt-6">
            <button className="bg-primary-light text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark hover:text-black transition">
              Confirm Attendance
            </button>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2 flex justify-center shadow-lg">
          
        <img
          src={image2}
          alt="Foto de Ana e Gabriel"
          className="w-full max-w-md rounded-lg object-cover"
        />
        </div>

      </div>
    </section>
  );
}
