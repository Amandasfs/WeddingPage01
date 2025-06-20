import image1 from '../assets/images/image1.jpg';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center px-4 sm:px-8"
      style={{
        backgroundImage: `url(${image1})`,
      }}
    >
      {/* Overlay para escurecer levemente o fundo */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card central */}
      <div className="relative z-10 bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-8 max-w-xl text-center">
        <h1 className="text-4xl sm:text-6xl font-tangerine text-primary-light mb-4">
          Ana & Thiago
        </h1>
        <p className="text-base sm:text-lg font-sans text-text-light mb-4">
          They have the pleasure of inviting you to celebrate this special moment of love and union.
        </p>
        <h2 className="text-3xl sm:text-4xl text-primary-light font-tangerine">
          20.06.2025
        </h2>
      </div>
    </section>
  );
}
