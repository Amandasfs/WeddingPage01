import { Heart } from "lucide-react";
import Calendar from "./Calendar";
import { QRCode } from "react-qrcode-logo";

export default function Date() {
  const qrMessage = "Não perca a chance de ter um site lindo assim pro seu casamento! Fale com a gente: https://wa.me/5511989032464";

  return (
    <section className="relative py-16 px-8 min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">

      {/* Card translúcido */}
      <div className="relative max-w-6xl w-full bg-white bg-opacity-70 rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Lado Esquerdo */}
        <div className="text-left relative z-20">
          <h2 className="text-5xl font-tangerine text-primary mb-4">Reserve esta Data</h2>
          <p className="text-text text-lg font-sans mb-6 leading-relaxed">
            O grande dia será repleto de amor, sorrisos e momentos inesquecíveis.<br />
            Esperamos ansiosos para dividir este momento tão especial com você!
          </p>

          <div className="mb-6">
            <Calendar />
          </div>

          <button className="bg-primary-light text-white px-6 py-3 rounded-full shadow transition hover:bg-primary-dark hover:text-black">
            Salvar na Agenda
          </button>
        </div>

        {/* Lado Direito */}
        <div className="text-left flex flex-col gap-8 relative z-20">


          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left flex-1">
              <h3 className="text-xl font-bold text-primary">Lista de Presentes</h3>
              <p className="text-text font-sans text-base leading-relaxed">
                Sua presença é o maior presente,<br />
                mas se desejar nos ajudar a construir nosso lar,<br />
                confira nossa lista.
              </p>
            </div>

            <div>
              <QRCode
                value={qrMessage}
                size={140}
                qrStyle="dots"           // pode ser "dots" ou "rounded"
                fgColor="#5c715e"        // verde
                bgColor="transparent"    // sem fundo
                quietZone={10}           // margem branca, opcional
                eyeRadius={8}            // bordas arredondadas dos olhos (cantos)
                />
            </div>
          </div>

          <Heart className="text-primary-light w-10 h-10 ml-4" fill="currentColor" />
          <div className="mt-8">
            <h3 className="text-xl font-bold text-primary mb-2">Local da Cerimônia</h3>
            <p className="text-text font-sans mb-4">
              Jardim Encantado das Flores<br />
              Rua das Camélias, 123 - Vila Romântica<br />
              Cidade dos Sonhos, SP
            </p>
            <iframe
              title="Mapa do Casamento"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.153344894083!2d-46.65247238448818!3d-23.597529468252914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9a3efb0d1%3A0x1e98c92d9d63b8a!2sParque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1718838854197!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}