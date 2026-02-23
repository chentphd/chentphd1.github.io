export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Chen T.</h1>
        <p className="text-2xl text-blue-600 font-medium mb-6">Data Analytics & Statistics Professional</p>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          I turn messy data into clear insights. Experienced in statistical modeling, 
          data visualization, and Python/R analysis.
        </p>
        <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition">
          See My Work
        </a>
      </div>
    </section>
  );
}