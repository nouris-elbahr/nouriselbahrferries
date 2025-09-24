function ReserverBox({ targetRef }) {
  return (
    <div
      className="overflow-hidden rounded-2xl bg-[url('/public/static/images/sub.png')] bg-cover bg-center md:mb-20 md:h-[20rem] md:rounded-3xl 3xl:mb-40 3xl:h-[30rem]"
      ref={targetRef}
    >
      <div className="flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-r from-[#0000003D] to-[#66666699] p-10">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-5 2md:gap-7 xl:gap-8 3xl:gap-10">
          <span className="text-center text-3xl font-medium text-white ls:text-xl sm:text-2xl md:w-[75%] md:text-2xl 2md:text-2xl xl:w-[65%] xl:text-[2.25rem] xl:leading-10 3xl:text-4xl">
            Restez informés et soyez les premiers à réserver votre place à bord.
          </span>
          <div className="flex w-full flex-col items-center gap-3 md:w-[85%] 2md:w-[70%] xl:w-[55%]">
            <div className="flex w-full flex-col items-center rounded-full border-[1px] bg-[#0000004D] p-1 md:flex-row">
              <input
                className="h-12 w-full bg-transparent px-5 text-lg text-white placeholder:font-sans placeholder:text-lg placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:h-auto md:px-5 md:py-2 3xl:px-7 3xl:text-xl 3xl:placeholder:text-xl"
                placeholder="Entrez votre email ici... "
                type="email"
              ></input>
              <button className="hidden rounded-full bg-white font-sans text-2xl font-medium transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black md:right-[3px] md:top-[3px] md:block md:px-8 md:py-3 md:text-sm md:font-bold 3xl:rounded-full 3xl:py-4 3xl:text-lg">
                S&apos;Abonner
              </button>
            </div>
            <button className="h-14 rounded-full bg-white px-8 py-3 font-sans text-2xl font-medium transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black md:hidden">
              S&apos;Abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserverBox;
