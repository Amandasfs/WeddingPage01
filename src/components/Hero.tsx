export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url(`${import.meta.env.BASE_URL}image1.jpg`)",  // Coloque sua foto nessa pasta pública
      }}
    >
      {/* Overlay para escurecer levemente o fundo */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card central */}
      <div className="relative z-10 bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-xl text-center">
        <h1 className="text-6xl font-tangerine text-primary-light mb-4">Ana & Thiago</h1>
        <p className="text-lg font-sans text-text-light">
          Têm o prazer de convidá-lo para celebrar este momento especial de amor e união.
        </p>
        <h2 className="text-4xl font-sans text-primary-light font-tangerine"> 20.06.2025</h2>
      </div>
    </section>
  );
}
