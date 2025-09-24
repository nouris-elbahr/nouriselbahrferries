import ReserverBox from "@/components/ui/ReserverBox";
import reservez from "/static/images/reservez.svg";
import { NavLink } from "react-router-dom";

function Reservez({ targetRef }) {
  return (
    <div className="space-y-5 md:space-y-0">
      <div className="space-y-5 text-center md:mb-5 md:space-y-0 3xl:mb-10">
        <h1 className="text-4xl font-bold md:mb-4 2md:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[1.1] 3xl:mb-8 3xl:text-7xl">
          <span className="text-nouris">Réservez </span>
          Votre Traversée
        </h1>
        <p className="text-lg 2md:text-base lg:text-[1.1rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl 3xl:leading-[2rem]">
          Préparez-vous à explorer la Méditerranée avec Nouris Elbahr Ferries en
          toute simplicité. Restez connecté pour découvrir nos offres spéciales
          dès l&rsquo;ouverture des réservations.<br />
        </p>
	
	<div className="flex justify-center md:block md:w-full">
        <button className="mx-auto rounded-full bg-nouris px-6 py-4 text-xl font-bold text-black transition-all duration-300 hover:bg-black hover:text-nouris md:mx-0 md:my-0 md:px-6 md:text-lg 2md:px-5 2md:py-2 xl:px-7 xl:py-3 xl:text-lg 3xl:px-10 3xl:py-4">
          <NavLink to="https://booking.nouriselbahrferries.com/en/book/journey/journeySearch/"> 
	   Réserver Maintenant </NavLink>
        </button>
      </div>
      </div>
	
      <img
        src={reservez}
        className="hidden w-[100%] md:block md:pb-8 3xl:pb-16"
      />
      <ReserverBox targetRef={targetRef} />
    </div>
  );
}

export default Reservez;
