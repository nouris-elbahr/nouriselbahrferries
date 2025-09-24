import logoV from "/public/static/images/logo-v.png";
import { NavLink } from "react-router-dom";
function Apropos() {
  return (
    <div className="flex justify-between md:gap-10 3xl:gap-24">
      <div className="mb-[7rem] space-y-5 3xl:mb-[15rem]">
        <h1 className="text-4xl font-bold capitalize text-nouris md:mb-4 2md:text-4xl lg:text-5xl xl:mb-3 xl:text-[3.5rem] xl:leading-[1.5] 3xl:mb-5 3xl:text-[4.5rem]">
          <span className="text-black">à propos </span>de nous
        </h1>
        <p className="text-lg text-[#414141] md:mb-4 2md:text-base lg:text-[1.1rem] xl:text-xl 3xl:mb-5 3xl:text-2xl">
          Fondée en 2024, Nouris Elbahr Ferries s’est imposée comme un acteur
          clé du transport maritime en Algérie. En tant que première compagnie
          privée du pays, nous avons pour mission de rendre le transport
          maritime plus accessible et plus confortable pour tous les voyageurs.
          Nous nous engageons à offrir des services d’excellence, soutenus par
          une équipe de professionnels dévoués et expérimentés.
        </p>
        <div className="flex md:block md:w-full">
          <button className="mx-auto rounded-full bg-nouris px-6 py-4 text-xl font-bold text-black transition-all duration-300 hover:bg-black hover:text-nouris md:mx-0 md:my-0 md:px-6 md:text-lg 2md:px-5 2md:py-2 xl:px-7 xl:py-3 xl:text-lg 3xl:px-10 3xl:py-4">
            <NavLink to="/about">En Savoir Plus</NavLink>
          </button>
        </div>
      </div>
      <img
        src={logoV}
        className="hidden md:block md:h-[11rem] xl:h-[14rem] 3xl:h-[20rem] 3xl:w-auto"
      />
    </div>
  );
}

export default Apropos;
