function Title() {
  return (
    <div className="mx-auto flex w-[93%] flex-col justify-center">
      <div className="absolute left-0 top-0 z-[-1] w-full bg-[url('/public/static/images/cracovia.jpg')] bg-cover bg-center">
        <div className="h-[55vh] w-full bg-gradient-to-t from-[#FCFCFC] from-[2%] to-[#0000007a] to-[74%] ls:h-[100vh] 2md:h-screen"></div>
      </div>

      <div className="mx-auto flex h-[65vh] w-[75%] flex-col items-center justify-center text-center text-4xl font-bold text-white ls:h-[85vh] 2md:h-[65vh] lg:text-5xl xl:text-6xl 3xl:text-7xl">
        <h1>
          <span>Découvrez </span>
          <span className="text-nouris">Notre Navire </span>
          <span>Moderne et Performant</span>
        </h1>
        <h1 className="font-cracovia font-thin text-nouris md:text-xl xl:text-2xl 3xl:text-3xl">
          Le Cracovia
        </h1>
      </div>

      <span className="mx-auto w-[75%] text-center text-lg font-medium 2md:text-sm lg:text-base xl:text-2xl 3xl:text-3xl">
        Le Cracovia est le navire phare de la flotte de Nouris Elbahr Ferries,
        offrant une combinaison parfaite de confort, de sécurité et de
        performance pour tous vos voyages en Méditerranée. Entièrement
        reconstruit en 2017 dans un chantier naval polonais pour répondre aux
        normes les plus strictes de l&apos;industrie maritime. Le Cracovia est
        conçu pour accueillir jusqu&apos;à 650 passagers, 64 voitures, ainsi que
        98 camions de longue distance et 26 camions de courte distance en une
        seule traversée.
      </span>
    </div>
  );
}

export default Title;
