function Valeurs() {
  return (
    <div className="pb-48">
      <div className="pb-8 text-center text-4xl font-bold text-black md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 3xl:text-[5rem]">
        <span>Nos </span>
        <span className="text-nouris">Valeurs</span>
      </div>
      <div className="grid w-[100%] gap-2 md:grid-cols-[1fr,1fr,2fr] md:gap-2 3xl:gap-5">
        <div className="flex flex-col gap-3 md:gap-2 lg:h-[20rem] xl:h-[25rem] 3xl:h-[32rem] 3xl:gap-5">
          <div className="flex grow flex-col items-stretch justify-between gap-6 rounded-xl border-2 bg-[#FCFCFC] p-4 text-black md:gap-2 md:p-3 xl:p-4 3xl:p-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-2xl lg:text-3xl xl:text-3xl">
                01
              </span>
              <span className="text-2xl font-bold text-[#484848] md:text-xs xl:text-sm 3xl:text-lg">
                Sécurité
              </span>
            </div>
            <span className="md:text-xs xl:text-sm 3xl:text-lg">
              Nous mettons un point d&apos;honneur à garantir des voyages sûrs
              et tranquilles.
            </span>
          </div>
          <div className="flex grow flex-col items-stretch justify-between gap-6 rounded-xl border-2 bg-[#FCFCFC] p-4 text-black md:gap-2 md:p-3 xl:p-4 3xl:p-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-4xl">
                02
              </span>
              <span className="text-2xl font-bold text-[#484848] md:text-xs xl:text-sm 3xl:text-lg">
                Confort
              </span>
            </div>
            <span className="md:text-xs xl:text-sm 3xl:text-lg">
              Offrir une expérience à bord agréable avec des installations
              modernes.
            </span>
          </div>
        </div>
        <div className="mb-3 h-[45dvw] w-[100%] rounded-2xl bg-[url('/public/static/images/valeurs1.png')] bg-cover bg-center ls:mb-0 ls:h-auto 3xl:h-[32rem]"></div>
        <div className="w-[100%] space-y-2 rounded-2xl bg-cover bg-center md:bg-[url('/public/static/images/valeurs2.png')] 3xl:h-[32rem]">
          <div className="flex min-w-[47%] grow flex-col items-stretch justify-between gap-6 rounded-xl border-2 bg-[#FCFCFC] p-4 text-black md:h-[47%] md:w-[47%] md:gap-0 md:p-3 3xl:gap-6 3xl:p-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold md:text-2xl lg:text-3xl 3xl:text-4xl">
                03
              </span>
              <span className="text-2xl font-bold text-[#484848] md:text-xs xl:text-sm 3xl:text-lg">
                Engagement
              </span>
            </div>
            <span className="md:text-xs md:leading-[0.8rem] xl:text-sm 3xl:text-lg">
              Assurer une qualité de service élevée pour nos passagers et
              partenaires.
            </span>
          </div>
          <div className="h-[35dvw] w-full rounded-2xl bg-[url('/public/static/images/valeurs2.png')] bg-cover bg-center md:hidden 3xl:h-[32rem]"></div>
        </div>
      </div>
    </div>
  );
}

export default Valeurs;
