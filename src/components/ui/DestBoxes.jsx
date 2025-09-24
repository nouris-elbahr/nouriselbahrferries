function DestBoxes({ onClick }) {
  return (
    <div className="flex w-full grid-cols-2 flex-col gap-5 ls:grid ls:gap-3 md:flex-row md:gap-5 3xl:gap-7">
      <div
        className="lg: relative flex aspect-square h-[80dvw] grow flex-col justify-end overflow-hidden rounded-3xl bg-[url('/public/static/images/Rectangle1.png')] bg-cover bg-center ls:h-auto md:rounded-xl lg:rounded-2xl xl:rounded-[1.5rem] 3xl:rounded-[2rem]"
        onClick={onClick}
      >
        <div className="absolute flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-t from-[#00000066] to-[#9FDAFF66] text-2xl font-extrabold text-white md:text-2xl 2md:text-4xl xl:text-5xl 3xl:text-7xl">
          MARSEILLE
        </div>
        <span className="absolute left-0 w-[100%] p-5 text-sm text-white ls:text-xs md:bottom-2 md:p-2 md:text-xs 2md:p-5 2md:text-base lg:text-[1.1rem] xl:p-6 xl:text-xl 3xl:bottom-8 3xl:text-2xl">
          Découvrez la ville portuaire emblématique du Sud de la France, avec
          ses sites historiques et sa riche culture méditerranéenne
        </span>
      </div>
      <div
        className="relative flex aspect-square h-[80dvw] grow flex-col justify-end overflow-hidden rounded-3xl bg-[url('/public/static/images/Rectangle2.png')] bg-cover bg-center ls:h-auto md:rounded-xl lg:rounded-2xl xl:rounded-[1.5rem] 3xl:rounded-[2rem]"
        onClick={onClick}
      >
        <div className="absolute flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-t from-[#00000066] to-[#FFDD0E66] text-2xl font-extrabold text-white md:text-2xl 2md:text-4xl xl:text-5xl 3xl:text-7xl">
          ALICANTE
        </div>
        <span className="absolute left-0 w-[100%] p-5 text-sm text-white ls:text-xs md:bottom-2 md:p-2 md:text-xs 2md:p-5 2md:text-base lg:text-[1.1rem] xl:p-6 xl:text-xl 3xl:bottom-8 3xl:text-2xl">
          Explorez cette charmante ville espagnole, connue pour ses plages
          magnifiques, sa gastronomie et son ambiance festive.
        </span>
      </div>
    </div>
  );
}

export default DestBoxes;
