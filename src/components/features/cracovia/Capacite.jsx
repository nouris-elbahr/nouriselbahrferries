function Capacite() {
  return (
    <div className="space-y-5">
      <h1 className="text-center text-4xl font-bold md:mb-5 md:text-4xl lg:mb-7 lg:text-5xl xl:text-6xl 3xl:mb-8 3xl:text-7xl">
        <span className="text-nouris">Capacité </span>
        et Confort à Bord
      </h1>
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 md:gap-3 lg:grid-cols-4 3xl:gap-5">
        <div className="flex grow flex-col items-stretch justify-between gap-5 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:px-3 md:py-4 lg:p-5 xl:py-7 3xl:rounded-xl 3xl:border-2 3xl:px-6 3xl:py-10">
          <div className="flex flex-col">
            <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl">
              650
            </span>
            <span className="text-2xl font-bold text-[#484848] md:text-xs lg:text-sm xl:text-base 3xl:text-lg">
              Capacité des Passagers
            </span>
          </div>
          <span className="text-lg md:text-xs lg:text-sm lg:leading-4 xl:text-base xl:leading-5 3xl:text-lg">
            Le Cracovia peut accueillir jusqu&apos;à 650 passagers, leur offrant
            un espace de voyage confortable avec des options variées de cabines
            adaptées à tous les besoins et budgets. Chaque cabine est équipée de
            lits confortables, de salles de bain privatives, et de toutes les
            commodités nécessaires pour un voyage agréable.
          </span>
        </div>
        <div className="flex flex-col gap-3 3xl:gap-5">
          <div className="h-[25vh] w-[100%] rounded-2xl bg-[url('/public/static/images/cap-1.png')] bg-cover bg-center sm:h-[80%] md:rounded-lg 3xl:rounded-2xl"></div>
          <div className="flex grow flex-col items-stretch justify-between gap-10 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:rounded-lg md:border-[1px] md:px-3 md:py-4 lg:px-5 xl:py-7 3xl:rounded-xl 3xl:border-2 3xl:p-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl">
                450
              </span>
              <span className="text-2xl font-bold text-[#484848] lg:text-sm xl:text-base 3xl:text-lg">
                Voitures
              </span>
            </div>
          </div>
        </div>
        <div className="flex grow flex-col items-stretch justify-between gap-5 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:gap-2 md:rounded-lg md:border-[1px] md:px-3 md:py-4 lg:px-5 xl:py-7 3xl:gap-6 3xl:rounded-xl 3xl:border-2 3xl:px-6 3xl:py-10">
          <div className="flex flex-col">
            <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl">
              98
            </span>
            <span className="text-2xl font-bold text-[#484848] md:text-xs lg:text-sm xl:text-base 3xl:text-lg">
              Camions de longue distance
            </span>
          </div>
          <span className="md:text-xs lg:text-sm lg:leading-4 xl:text-base xl:leading-5 3xl:text-lg">
            Grâce à sa capacité exceptionnelle, le Cracovia est idéal pour les
            voyageurs en voiture ainsi que pour le transport de marchandises,
            offrant une grande flexibilité pour les entreprises et les voyageurs
            individuels.
          </span>
        </div>
        <div className="flex flex-col gap-3 3xl:gap-5">
          <div className="flex grow flex-col items-stretch justify-between gap-5 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:rounded-lg md:border-[1px] md:px-3 md:py-4 lg:px-5 xl:py-7 3xl:gap-6 3xl:rounded-xl 3xl:border-2 3xl:px-6 3xl:py-7">
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl">
                26
              </span>
              <span className="font-bold text-[#484848] md:text-xs lg:text-sm xl:text-base 3xl:text-lg">
                Camions de courte distance
              </span>
            </div>
          </div>
          <div className="h-[25vh] w-[100%] rounded-2xl bg-[url('/public/static/images/cap-2.png')] bg-cover bg-center sm:h-[80%] md:rounded-lg 3xl:rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Capacite;
