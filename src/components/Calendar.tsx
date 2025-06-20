import { FaHeart } from "react-icons/fa";

export default function Calendar() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Junho tem 30 dias

  return (
    <div
      className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-sm mx-auto"
      style={{ aspectRatio: '1 / 1' }} // força formato quadrado
    >
      <h3 className="text-xl sm:text-2xl font-tangerine text-primary mb-4 text-center">
        June 2025
      </h3>

      {/* Cabeçalho com os dias da semana */}
      <div className="grid grid-cols-7 text-center font-sans text-xs sm:text-sm text-text mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}
      </div>

      {/* Dias do mês */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-sans text-xs sm:text-base text-text" style={{ height: 'calc(100% - 72px)' }}>
        {[...Array(0)].map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`relative rounded-full flex items-center justify-center cursor-default
              ${
                day === 20
                  ? "bg-green-200 text-green-700 font-bold shadow"
                  : "hover:bg-primary-light hover:text-white transition"
              }
            `}
            style={{ aspectRatio: '1 / 1', lineHeight: 'normal', padding: '0.25rem' }}
          >
            {day}

            {/* Ícone de coração no dia 20 */}
            {day === 20 && (
              <FaHeart className="absolute -top-2 -right-2 text-green-600 text-xs sm:text-sm animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
