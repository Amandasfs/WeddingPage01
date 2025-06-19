import { FaHeart } from "react-icons/fa";

export default function Calendar() {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Junho tem 30 dias

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 w-full max-w-md">
      <h3 className="text-2xl font-tangerine text-primary mb-4 text-center">Junho 2025</h3>

      {/* Cabeçalho com os dias da semana */}
      <div className="grid grid-cols-7 text-center font-sans text-sm text-text mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}
      </div>

      {/* Dias do mês */}
      <div className="grid grid-cols-7 gap-2 text-center font-sans text-text text-base">
        {/* Espaço para começar na sexta (dia 1 de junho de 2025 cai num domingo) */}
        {[...Array(0)].map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`relative py-2 rounded-full ${
              day === 20
                ? "bg-green-200 text-green-700 font-bold shadow"
                : "hover:bg-primary-light hover:text-white transition"
            }`}
          >
            {day}

            {/* Ícone de coração no dia 20 */}
            {day === 20 && (
              <FaHeart className="absolute -top-2 -right-2 text-green-600 text-sm animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}