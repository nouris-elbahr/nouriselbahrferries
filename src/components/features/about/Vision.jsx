import vision from "/public/static/images/vision.png";

function Vision() {
  return (
    <div className="flex w-full flex-col gap-5 md:flex-row 3xl:gap-24">
      <div className="flex grow flex-col justify-center space-y-5 md:w-[50%]">
        <div className="text-4xl font-bold md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 3xl:text-[5rem]">
          <span>Notre </span>
          <span className="text-nouris">Vision</span>
        </div>
        <div className="md:hidden md:w-[50%]">
          <img
            src={vision}
            className="rounded-xl md:rounded-md 3xl:rounded-2xl"
          />
        </div>
        <span className="font-medium md:text-base lg:mr-16 xl:text-xl 3xl:text-2xl">
          Être le choix privilégié pour le transport maritime en Méditerranée,
          tout en garantissant la sécurité, le confort et la satisfaction de nos
          passagers.
        </span>
      </div>
      <div className="hidden md:block md:w-[50%]">
        <img src={vision} className="md:rounded-md 3xl:rounded-2xl" />
      </div>
    </div>
  );
}

export default Vision;
