import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Info() {
  const { t } = useTranslation();

  return (
    <section className="bg-background-light dark:bg-background-dark py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

        {/* Texto sobre os noivos */}
        <div className="md:w-1/2 text-left mb-6 md:mb-0 px-2 sm:px-4">
          {/* Título com coração */}
          <div className="flex items-center mb-2 sm:mb-4">
            <h2 className="text-4xl sm:text-6xl font-tangerine text-primary-light">{t('infoTitle')}</h2>
            <Heart className="text-primary-light w-6 h-6 sm:w-10 sm:h-10 ml-2 sm:ml-4" fill="currentColor" />
          </div>

          {/* Parágrafos */}
          <p className="text-text text-base sm:text-lg font-sans leading-relaxed">
            {t('infoParagraph1')}
          </p>
          <p className="text-text text-base sm:text-lg font-sans mt-2 sm:mt-4 leading-relaxed">
            {t('infoParagraph2')}
          </p>

          {/* Botão de Confirmar Presença */}
          <div className="mt-4 sm:mt-6">
            <button className="bg-primary-light text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow hover:bg-primary-dark hover:text-black transition">
              {t('confirmButton')}
            </button>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2 flex justify-center px-2 sm:px-4">
          <img
            src="./assets/images/image2.png"
            alt="Foto de Ana e Gabriel"
            className="w-full max-w-xs sm:max-w-md rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
