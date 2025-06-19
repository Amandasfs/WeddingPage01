import { Heart } from 'lucide-react';

export default function Info() {
  return (
    <section className="bg-background-light dark:bg-background-dark py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Texto sobre os noivos */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          {/* Título com coração */}
          <div className="flex items-center mb-4">
            <h2 className="text-6xl font-tangerine text-primary-light">Nossa História</h2>
            <Heart className="text-primary-light w-10 h-10 ml-4" fill="currentColor" />
          </div>

          {/* Parágrafos */}
          <p className="text-text text-lg font-sans leading-relaxed">
            Ana e Thiago se conheceram numa tarde de outono, quando o acaso decidiu juntar dois corações destinados a caminhar juntos. 
            Desde então, cada sorriso, cada abraço e cada sonho partilhado fortaleceu ainda mais o amor entre eles.
          </p>
          <p className="text-text text-lg font-sans mt-4 leading-relaxed">
            Agora, com muita emoção, eles convidam você a testemunhar o próximo capítulo desta linda história: o dia do seu casamento. 
            Uma celebração de amor, cumplicidade e alegria, que só será completa com a sua presença.
          </p>

          {/* Botão de Confirmar Presença */}
          <div className="mt-6">
            <button className="bg-primary-light text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark hover:text-black transition">
              Confirmar Presença
            </button>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/image2.png"
            alt="Foto de Ana e Gabriel"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
