import logoV from "/public/static/images/logo-v.png";
function Histoire() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 md:space-y-14">
      <img src={logoV} className="h-[8rem] md:h-[7rem] lg:h-[10rem]" />
      <div className="text-center text-4xl font-bold text-black md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 3xl:text-[4rem]">
        <span className="text-nouris">Histroire </span>
        <span>de l&apos;Entreprise</span>
      </div>
      <div className="mx-auto max-w-[80%] text-center font-medium">
        <p className="text-lg text-black xl:text-[1.25rem] 3xl:text-2xl">
          Fondée en 2024, Nouris Elbahr Ferries s’est imposée comme un acteur
          clé du transport maritime en Algérie, offrant des liaisons sûres et
          confortables à destination de l’Europe. Nous nous engageons à offrir
          une qualité de service irréprochable à bord de notre navire, le
          Cracovia.
        </p>
      </div>
    </div>
  );
}

export default Histoire;
