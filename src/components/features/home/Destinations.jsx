import DestBoxes from "@/components/ui/DestBoxes";

function Destinations({ onClick }) {
  return (
    <div className="flex flex-col justify-center space-y-5">
      <h1 className="text-4xl font-bold 2md:text-4xl lg:text-5xl xl:text-5xl xl:text-[3.5rem] xl:leading-[1.1] 3xl:text-[4.5rem] 3xl:leading-[7rem]">
        <div className="3xl:mb-[-2rem]">
          <span>Explorez </span>
          <span className="text-nouris">Nos Destinations</span>
        </div>
        <span> Méditerranéennes</span>
      </h1>

      <p className="text-lg text-[#414141] md:mb-4 md:mt-1 md:text-lg 2md:mb-4 2md:mt-1 2md:text-[1rem] 2md:leading-[1.25rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:mb-[5rem] 3xl:text-2xl">
        Nouris Elbahr Ferries vous propose des liaisons régulières depuis
        l’Algérie vers deux destinations phares en Europe
      </p>

      <DestBoxes onClick={onClick} />
    </div>
  );
}

export default Destinations;
