import home from "/public/static/images/about.jpg";
function Title() {
  return (
    <div className="flex flex-col justify-center">
      {/* <div className="absolute left-0 top-0 z-[-2] w-full">
        <img
          src={home}
          alt="Background"
          className="absolute left-0 top-0 z-[-1] w-screen md:top-0 2md:top-0 3xl:top-[-5rem]"
        ></img>

        <div className="">
          <div className="aspect-[3/2] bg-gradient-to-b from-[#00000040] from-[50.4%] to-[#FFF] to-[65%] 3xl:top-[-5rem]"></div>
        </div>
      </div> */}
      <div className="absolute left-0 top-0 z-[-1] w-full bg-[url('/public/static/images/about.jpg')] bg-cover bg-center">
        <div className="h-screen w-full bg-gradient-to-b from-[#00000040] from-[60.4%] to-[#FFF] to-[85%]"></div>
      </div>

      <div className="flex h-[95dvh] flex-col items-center justify-center text-center">
        <div className="text-4xl font-bold text-white md:text-[2.5rem] lg:text-[3rem] lg:leading-[2.75rem] xl:text-[3.5rem] 3xl:text-[5rem] 3xl:leading-[4.3rem]">
          <span className="text-nouris">Qui </span>
          <span>sommes-nous ?</span>
        </div>
        <span className="text-center text-lg font-light text-white md:text-sm lg:text-lg xl:text-xl xl:leading-10 3xl:text-[1.75rem]">
          La Première Compagnie de Transport Maritime Privée en Algérie
        </span>
      </div>
    </div>
  );
}

export default Title;
