const PartnersSection = () => {
  const partners = ["LOGOIPSUM", "LOGO", "logoipsum", "LOGOIPSUM", "logoipsum", "logoipsum"];

  return (
    <section className="py-16 bg-black border-y border-gray-900">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-8 uppercase tracking-wider">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;