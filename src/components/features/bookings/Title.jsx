import { NavLink } from "react-router-dom";

function Title() {
  return (
    <div className="flex flex-col justify-center pb-24">
      <div className="absolute left-0 top-0 z-[-1] w-full bg-[url('/public/static/images/bookings.png')] bg-cover bg-center">
        <div className="h-screen w-full bg-gradient-to-b from-[#00000040] from-[10%] to-[#FFF] to-[82%]"></div>
      </div>
      <div className="flex h-[95dvh] flex-col items-center justify-center text-center">
        <div className="mx-auto flex h-[95vh] w-[100%] flex-col items-center justify-center text-center text-4xl font-bold text-white ls:h-[85vh] 2md:h-[65vh] lg:text-5xl xl:text-6xl 3xl:text-7xl">
          <h1>
            {" "}
            <span className="text-nouris">Réservez </span>
            <span>Votre Traversée</span>
          </h1>
          </div>
	<div className="flex justify-center md:block md:w-full">
        <button className="mx-auto rounded-full bg-nouris px-6 py-4 text-xl font-bold text-black transition-all duration-300 hover:bg-black hover:text-nouris md:mx-0 md:my-0 md:px-6 md:text-lg 2md:px-5 2md:py-2 xl:px-7 xl:py-3 xl:text-lg 3xl:px-10 3xl:py-4">
          <NavLink to="https://booking.nouriselbahrferries.com/en/book/journey/journeySearch/"> Réserver Maintenant </NavLink>
        </button>
      	</div>
	<div className="md:mb-4">
	</div> 
	<div className="flex justify-center md:block md:w-full">
        <button className="mx-auto rounded-full bg-nouris px-6 py-4 text-xl font-bold text-black transition-all duration-300 hover:bg-black hover:text-nouris md:mx-0 md:my-0 md:px-6 md:text-lg 2md:px-5 2md:py-2 xl:px-7 xl:py-3 xl:text-lg 3xl:px-10 3xl:py-4">
          <NavLink to="https://booking.nouriselbahrferries.com/en/my-booking/"> Modifier Ma Réservation </NavLink>
        </button>
      	</div>

        <div className="mx-auto max-w-[74%] text-center font-semibold leading-5 ls:text-lg ls:leading-5 md:text-xl md:leading-5 2md:text-lg 2md:leading-5 lg:text-xl lg:leading-6 xl:text-2xl xl:leading-7 3xl:text-3xl">
         <br /> Préparez-vous à explorer la Méditerranée avec Nouris Elbahr
          Ferries en toute simplicité.
        </div>
      </div>
    </div>
  );
}

export default Title;
