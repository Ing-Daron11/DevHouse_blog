import React from "react";

const BlogSection = () => (
  <section className="py-16 bg-white" id="blog">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog Educativo</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <article className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">¿Cómo elegir un proveedor digital?</h3>
          <p className="text-gray-700 mb-2">Consejos para seleccionar una agencia honesta y transparente que se adapte a tus necesidades.</p>
          <a href="#" className="text-blue-600 hover:underline">Leer más</a>
        </article>
        <article className="bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Tendencias tecnológicas 2026</h3>
          <p className="text-gray-700 mb-2">Descubre las tendencias que marcarán el futuro digital y cómo prepararte para ellas.</p>
          <a href="#" className="text-blue-600 hover:underline">Leer más</a>
        </article>
      </div>
    </div>
  </section>
);

export default BlogSection;
