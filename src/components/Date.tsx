import { Heart } from "lucide-react";
import Calendar from "./Calendar";
import { QRCode } from "react-qrcode-logo";

export default function Date() {
  const qrMessage =
    "Don't miss the chance to have a beautiful wedding site like this! Contact us: https://wa.me/5511989032464";

  return (
    <section className="relative py-12 px-4 sm:px-8 min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      {/* Card translúcido */}
      <div className="relative max-w-6xl w-full bg-white bg-opacity-70 rounded-2xl shadow-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* Lado Esquerdo */}
        <div className="relative z-20 px-2 sm:px-4
          text-center md:text-left
          flex flex-col items-center md:items-start
        ">
          <h2 className="text-3xl sm:text-5xl font-tangerine text-primary mb-4">Save the Date</h2>
          <p className="text-text text-base sm:text-lg font-sans mb-4 leading-relaxed max-w-md">
            The big day will be full of love, smiles, and unforgettable moments.<br />
            We look forward to sharing this special moment with you!
          </p>

          <div className="mb-4 sm:mb-6">
            <Calendar />
          </div>

          <button className="bg-primary-light text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow transition hover:bg-primary-dark hover:text-black">
            Save to Calendar
          </button>
        </div>

        {/* Lado Direito */}
        <div
          className="relative z-20 px-2 sm:px-4
            flex flex-col gap-6 sm:gap-8
            items-center md:items-start
            text-center md:text-left
          "
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-full">
            <div className="text-left flex-1 max-w-md">
              <h3 className="text-xl font-bold text-primary">Gift Registry</h3>
              <p className="text-text font-sans text-base leading-relaxed">
                Your presence is the greatest gift,<br />
                but if you want to help us build our home,<br />
                check out our gift list.
              </p>
            </div>

            <div>
              <QRCode
                value={qrMessage}
                size={140}
                qrStyle="dots"
                fgColor="#5c715e"
                bgColor="transparent"
                quietZone={10}
                eyeRadius={8}
              />
            </div>
          </div>

          {/* Coração centralizado */}
          <div className="flex justify-center w-full">
            <Heart className="text-primary-light w-10 h-10" fill="currentColor" />
          </div>

          <div className="w-full max-w-md">
            <h3 className="text-xl font-bold text-primary mb-2">Ceremony Location</h3>
            <p className="text-text font-sans mb-4">
              Jardim Encantado das Flores<br />
              Rua das Camélias, 123 - Vila Romântica<br />
              Cidade dos Sonhos, SP
            </p>
            <iframe
              title="Wedding Location Map"
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
