function ReserverMultiBox({ targetRef }) {
  return (
    <div
      className="mb-[7rem] overflow-hidden rounded-2xl bg-[url('/public/static/images/sub.png')] bg-cover bg-center md:rounded-3xl 3xl:mb-40 3xl:h-[30rem]"
      ref={targetRef}
    >
      <div className="flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-r from-[#0000003D] to-[#66666699] p-10">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-5 2md:w-full 2md:gap-7 xl:gap-8 3xl:gap-10">
          <span className="text-center text-3xl font-medium text-white ls:text-xl sm:text-2xl md:w-[75%] md:text-2xl 2md:text-2xl xl:w-[65%] xl:text-[2.25rem] xl:leading-10 3xl:text-4xl">
            Restez informés et soyez les premiers à réserver votre place à bord.
          </span>
          <div className="flex w-full flex-col items-center gap-3 md:w-[70%] 2md:grid 2md:w-[95%] 2md:grid-cols-[20fr,23fr,45fr,11fr] 2md:gap-1">
            <div className="flex w-full flex-col items-center rounded-full border-[1px] bg-[rgba(0,0,0,0.3)] p-1 md:flex-row 2md:px-4 2md:py-2">
              <input
                className="h-9 w-full bg-transparent px-3 text-base text-white placeholder:font-sans placeholder:text-base placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:px-5 md:py-2 2md:h-auto 2md:px-0 2md:py-1 2md:text-xs 2md:placeholder:text-xs xl:text-sm xl:placeholder:text-sm 3xl:px-2 3xl:text-xl 3xl:placeholder:text-xl"
                placeholder="Nom et Prénom"
              ></input>
            </div>
            <div className="flex w-full flex-col items-center rounded-full border-[1px] bg-[rgba(0,0,0,0.3)] p-1 md:flex-row 2md:px-4 2md:py-2">
              <input
                type="email"
                className="h-9 w-full bg-transparent px-3 text-base text-white placeholder:font-sans placeholder:text-base placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:h-auto md:px-5 md:py-2 2md:h-auto 2md:px-0 2md:py-1 2md:text-xs 2md:placeholder:text-xs xl:text-sm xl:placeholder:text-sm 3xl:px-2 3xl:text-xl 3xl:placeholder:text-xl"
                placeholder="Email"
              ></input>
            </div>
            <div className="flex w-full flex-col items-center rounded-full border-[1px] bg-[rgba(0,0,0,0.3)] p-1 md:flex-row 2md:px-4 2md:py-2">
              <input
                className="h-9 w-full bg-transparent px-3 text-base text-white placeholder:font-sans placeholder:text-base placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:px-5 md:py-2 2md:h-auto 2md:px-0 2md:py-1 2md:text-xs 2md:placeholder:text-xs xl:text-sm xl:placeholder:text-sm 3xl:px-2 3xl:text-xl 3xl:placeholder:text-xl"
                placeholder="Ajouter quelque chose ... "
              ></input>
            </div>
            <button className="h-11 rounded-full bg-white px-8 py-0 font-sans text-base font-bold transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black 2md:h-full 2md:px-5 2md:text-xs xl:text-base 3xl:text-xl">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserverMultiBox;
