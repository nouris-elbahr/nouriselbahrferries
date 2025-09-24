// nh
import spec from "/public/static/images/specs.png";

function Specs() {
  return (
    <div className="flex ls:gap-7 md:gap-10 md:pt-[7rem] 3xl:gap-10">
      <div className="flex w-full flex-col space-y-5 md:w-[65%]">
        <h1 className="text-4xl font-bold 2md:mb-4 lg:text-5xl xl:mb-8 xl:text-6xl 3xl:text-7xl">
          <span className="text-nouris">Caractéristiques </span>
          Techniques et Opérationnelles
        </h1>
        <span className="md:leading[1.5rem] text-lg 2md:text-base xl:mb-10 xl:text-[1.4rem] xl:leading-[1.85rem]">
          Le Cracovia est équipé pour naviguer en toute sécurité dans toutes les
          conditions maritimes, répondant aux exigences des Conventions
          internationales, des recommandations de l&apos;Organisation Maritime
          Internationale (OMI), ainsi qu&apos;aux autres restrictions de
          navigation en vigueur
        </span>
        <div className="divide-y-[1px] divide-nouris text-xl font-medium leading-10 md:text-2xl 2md:text-[0.85rem] 2md:leading-3 lg:text-base xl:text-[1.4rem] 3xl:divide-y-2 3xl:pr-28">
          <div className="flex items-center justify-between md:py-2 lg:py-4 xl:py-5">
            <span>Longueur (mètres)</span>
            <span className="lg:text-xl xl:text-[1.65rem]">180</span>
          </div>
          <div className="flex items-center justify-between md:py-2 lg:py-4 xl:py-5">
            <span>Largeur (mètres)</span>
            <span className="lg:text-xl xl:text-[1.65rem]">24.80</span>
          </div>
          <div className="flex items-center justify-between md:py-2 lg:py-4 xl:py-5">
            <span>Tirant d&apos;eau (mètres)</span>
            <span className="lg:text-xl xl:text-[1.65rem]">6.5</span>
          </div>
          <div className="flex items-center justify-between md:py-2 lg:py-4 xl:py-5">
            <span>Longueur de la ligne de charge (mètres)</span>
            <span className="lg:text-xl xl:text-[1.65rem]">2196</span>
          </div>
          <div className="flex items-center justify-between md:pt-2 lg:py-4 xl:pt-5">
            <span>Largeur de la ligne de charge (mètres)</span>
            <span className="lg:text-xl xl:text-[1.65rem]">16.7</span>
          </div>
        </div>
      </div>
      {/* <div className="h-auto grow rounded-3xl bg-[url('/public/static/images/specs.png')] bg-cover bg-center"></div> */}
      <div className="hidden flex-grow overflow-hidden rounded-[1rem] sm:block">
        <img src={spec} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default Specs;
