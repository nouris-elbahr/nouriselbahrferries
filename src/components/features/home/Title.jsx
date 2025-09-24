// import home from "/public/static/images/home.png";

function Title() {
  return (
    <div className="flex flex-col justify-center">
      <div className="absolute left-0 top-[-5rem] z-[-1] w-full bg-[url('/public/static/images/home.png')] bg-cover bg-center md:top-0">
        <div className="h-[54dvh] w-full bg-gradient-to-b from-[#00000030] from-[55.4%] to-[#FFF] to-[85%] ls:h-screen md:bg-none"></div>
      </div>

      <div className="pb-16 pt-[calc(35dvh)] text-center ls:pt-[calc(60dvh)] md:h-[95dvh] md:py-0">
        <div className="flex flex-col items-center justify-center gap-2 md:h-[60%] md:gap-0 2md:gap-2">
          <div>
            <h1 className="text-xl md:text-lg md:leading-4 2md:mb-2 2md:text-base lg:text-xl 3xl:text-2xl">
              Bienvenue à Bord de
            </h1>
            <h1 className="text-4xl font-[900] md:text-4xl md:leading-8 2md:text-3xl 2md:leading-[1.2rem] lg:text-[2.5rem] lg:leading-[2rem] xl:text-5xl">
              Nouris Elbahr Ferries
            </h1>
          </div>
          <span className="bg-black px-1 py-1.5 font-aoboshi text-lg font-[300] leading-5 tracking-wide text-nouris md:px-2 md:py-0 md:text-[0.85rem] md:leading-6 2md:px-2 2md:py-[0.05rem] 2md:text-[0.6rem] lg:text-xs lg:leading-5 xl:px-3 xl:text-base 3xl:py-1">
            Voyagez en Méditerranée avec Confort et Sérénité
          </span>
        </div>
      </div>
      <div className="mx-auto text-center md:max-w-[75%]">
        <p className="text-lg font-medium text-[#000] md:text-sm md:leading-[1.25rem] 2md:text-[0.9rem] 2md:leading-[1.25rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl">
          Nouris Elbahr Ferries est la première compagnie de transport maritime
          privée en Algérie, dédiée à offrir des traversées inoubliables à
          travers la Méditerranée. Que vous voyagiez pour affaires ou pour le
          plaisir, notre objectif est de vous offrir une expérience de voyage
          exceptionnelle, alliant confort, sécurité, et service de qualité.
          Embarquez avec nous pour découvrir les plus belles destinations
          méditerranéennes à bord du Cracovia, notre navire moderne et
          parfaitement équipé.
        </p>
      </div>
    </div>
  );
}

export default Title;
