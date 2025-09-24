function LeCracovia() {
  return (
    <div className="space-y-5 md:space-y-0">
      <div className="flex flex-col space-y-5 md:mb-6 md:grid md:grid-cols-2 md:space-y-0 3xl:mb-28">
        <h1 className="text-4xl font-bold text-nouris 2md:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[1.1] 3xl:mb-32 3xl:text-7xl">
          Le Cracovia
        </h1>
        <span className="text-lg md:text-lg 2md:text-base lg:text-[1.1rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl 3xl:leading-[3rem]">
          Le Cracovia est le joyau de la flotte de Nouris Elbahr Ferries. <br />{" "}
          Conçu pour allier confort et sécurité, ce navire moderne est équipé de
          tout ce dont vous avez besoin pour une traversée agréable
        </span>
      </div>
      <div className="h-[25dvh] rounded-lg bg-[url('/public/static/images/Cracovia.jpeg')] bg-cover bg-center md:h-[15rem] md:rounded-xl 3xl:h-[40rem] 3xl:rounded-3xl"></div>
      <div className="flex flex-col md:mt-2 md:gap-2 md:text-lg 2md:mt-2 2md:gap-2 2md:text-sm 3xl:gap-8 3xl:text-3xl">
        <div className="hidden md:block">
          <div className="flex flex-col divide-nouris md:divide-y-[1px] 3xl:divide-y-2">
            <div className="grid grid-cols-3 font-bold md:gap-3 md:py-1 3xl:gap-8 3xl:py-4">
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>
            <div className="grid grid-cols-3 font-medium md:gap-3 md:pt-1 2md:gap-3 2md:pt-2 2md:font-bold lg:pb-4 3xl:gap-8 3xl:pt-4">
              <span>Cabines Confortables</span>
              <span>Serivces à Bord</span>
              <span>Sécurité maximale</span>
            </div>
          </div>
          <div className="grid grid-cols-3 text-[#484848] md:gap-3 3xl:gap-8">
            <span>
              Des cabines spacieuses avec lits confortables et salles de bain
              privatives.
            </span>
            <span>
              Profitez de restaurants offrant une cuisine variée, de cafés pour
              vous détendre, de boutiques détaxées pour vos achats, et de zones
              de divertissement pour tous les âges.
            </span>
            <span>
              Le Cracovia est équipé des dernières technologies en matière de
              sécurité maritime pour assurer une navigation sereine.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:hidden">
          <div className="">
            <div className="flex flex-col divide-y-2 divide-nouris text-xl font-bold">
              <span>01</span>
              <span>Cabines Confortables</span>
            </div>
            <div className="pt-5 text-lg">
              Des cabines spacieuses avec lits confortables et salles de bain
              privatives.
            </div>
          </div>
          <div className="">
            <div className="flex flex-col divide-y-2 divide-nouris text-xl font-bold">
              <span>02</span>
              <span>Serivces à Bord</span>
            </div>
            <div className="pt-5 text-lg">
              Profitez de restaurants offrant une cuisine variée, de cafés pour
              vous détendre, de boutiques détaxées pour vos achats, et de zones
              de divertissement pour tous les âges.
            </div>
          </div>
          <div className="">
            <div className="flex flex-col divide-y-2 divide-nouris text-xl font-bold">
              <span>03</span>
              <span>Sécurité maximale</span>
            </div>
            <div className="pt-5 text-lg">
              Le Cracovia est équipé des dernières technologies en matière de
              sécurité maritime pour assurer une navigation sereine.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeCracovia;
