function Services() {
  return (
    <div className="space-y-10 md:space-y-0">
      <div className="space-y-5 md:mb-5 3xl:mb-10">
        <h1 className="text-4xl font-bold md:mb-5 2md:mb-2 2md:text-5xl xl:text-[3.5rem] xl:leading-[1] 3xl:mb-8 3xl:text-7xl">
          Des Services Pensés{" "}
          <span className="hidden text-nouris ls:block">pour vous</span>
          <span className="text-nouris ls:hidden">pour vous</span>
        </h1>
        <p className="text-lg 2md:text-base lg:text-[1.1rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl 3xl:leading-[3rem]">
          À bord de Nouris Elbahr Ferries, nous nous engageons à vous offrir des
          services de qualité pour rendre votre traversée aussi agréable que
          possible.
        </p>
      </div>

      <div className="hidden flex-col gap-2 ls:flex md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-rows-[7fr,5fr] gap-2">
            <div className="flex grow flex-col items-stretch justify-between rounded-2xl bg-black p-5 text-white">
              <div className="flex flex-col">
                <span className="text-2xl text-[#838383]">01.</span>
                <span className="text-2xl font-semibold">Restauration</span>
              </div>
              <span className="text-sm text-[#838383]">
                Savourez une cuisine délicieuse à bord, avec des options pour
                tous les goûts, y compris des menus spéciaux pour les enfants.
              </span>
            </div>
            <div className="h-full rounded-2xl bg-[url('/public/static/images/restauration.png')] bg-cover bg-center"></div>
          </div>
          <div className="grid grid-rows-[5fr,7fr] gap-2">
            <div className="h-full rounded-2xl bg-[url('/public/static/images/wifi.png')] bg-cover bg-center"></div>
            <div className="flex grow flex-col items-stretch justify-between gap-3 rounded-2xl bg-[#EBEBEB] p-5 text-white">
              <div className="flex flex-col">
                <span className="text-2xl text-[#838383]">02.</span>
                <span className="text-2xl font-semibold text-black">
                  Divertissement
                </span>
              </div>
              <span className="text-sm text-[#838383]">
                Ne vous ennuyez jamais avec notre large choix de
                divertissements, incluant un cinéma, des spectacles en direct,
                et des zones de jeux pour enfants.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[6fr,7fr] gap-2">
          <div className="flex grow flex-col items-stretch justify-between gap-4 rounded-2xl bg-[#CDCDCD] p-5 text-white">
            <div className="flex flex-col">
              <span className="text-2xl text-black">03.</span>
              <span className="text-2xl font-semibold text-[#797979]">
                Wifi et Connectivité
              </span>
            </div>
            <span className="text-sm text-black">
              Ne vous ennuyez jamais avec notre large choix de divertissements,
              incluant un cinéma, des spectacles en direct, et des zones de jeux
              pour enfants.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-full rounded-2xl bg-[url('/public/static/images/shopping.png')] bg-cover bg-center"></div>
            <div className="flex grow flex-col items-stretch justify-between gap-7 rounded-2xl bg-[#6C6C6C] p-5 text-white">
              <div className="flex flex-col">
                <span className="text-2xl text-[#E3E3E3]">04.</span>
                <span className="text-2xl font-semibold">Shopping à bord</span>
              </div>
              <span className="text-sm text-[#E3E3E3]">
                Profitez de notre boutique détaxée pour acheter des souvenirs,
                des articles de mode, et des produits de luxe.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 ls:hidden">
        <div className="flex flex-col gap-2">
          <div className="h-[35dvw] w-full rounded-2xl bg-[url('/public/static/images/restauration.png')] bg-cover bg-center"></div>
          <div className="flex grow flex-col items-stretch justify-between gap-5 rounded-2xl bg-black p-5 text-white">
            <div className="flex flex-col">
              <span className="text-2xl text-[#838383]">01.</span>
              <span className="text-2xl font-semibold">Restauration</span>
            </div>
            <span className="text-sm text-[#838383]">
              Savourez une cuisine délicieuse à bord, avec des options pour tous
              les goûts, y compris des menus spéciaux pour les enfants.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-[35vw] w-full rounded-2xl bg-[url('/public/static/images/wifi.png')] bg-cover bg-center"></div>
          <div className="flex grow flex-col items-stretch justify-between gap-5 rounded-2xl bg-[#EBEBEB] p-5 text-white">
            <div className="flex flex-col">
              <span className="text-2xl text-[#838383]">02.</span>
              <span className="text-2xl font-semibold text-black">
                Divertissement
              </span>
            </div>
            <span className="text-sm text-[#838383]">
              Ne vous ennuyez jamais avec notre large choix de divertissements,
              incluant un cinéma, des spectacles en direct, et des zones de jeux
              pour enfants.
            </span>
          </div>
        </div>
        <div className="flex grow flex-col items-stretch justify-between gap-4 rounded-2xl bg-[#CDCDCD] p-5 text-white">
          <div className="flex flex-col">
            <span className="text-2xl text-black">03.</span>
            <span className="text-2xl font-semibold text-[#797979]">
              Wifi et Connectivité
            </span>
          </div>
          <span className="text-sm text-black">
            Ne vous ennuyez jamais avec notre large choix de divertissements,
            incluant un cinéma, des spectacles en direct, et des zones de jeux
            pour enfants.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-[35dvw] w-full rounded-2xl bg-[url('/public/static/images/shopping.png')] bg-cover bg-center"></div>
          <div className="flex grow flex-col items-stretch justify-between gap-7 rounded-2xl bg-[#6C6C6C] p-5 text-white">
            <div className="flex flex-col">
              <span className="text-2xl text-[#E3E3E3]">04.</span>
              <span className="text-2xl font-semibold">Shopping à bord</span>
            </div>
            <span className="text-sm text-[#E3E3E3]">
              Profitez de notre boutique détaxée pour acheter des souvenirs, des
              articles de mode, et des produits de luxe.
            </span>
          </div>
        </div>
      </div>

      <div className="hidden grid-cols-[1fr,3fr] md:grid md:gap-2 xl:gap-4 3xl:gap-5">
        <div className="flex flex-col md:h-[100%] md:gap-2 2md:h-[26rem] xl:h-[33rem] xl:gap-4 3xl:h-[48rem] 3xl:gap-5">
          <div className="flex grow flex-col items-stretch justify-between bg-black text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:rounded-3xl 3xl:px-6 3xl:py-10">
            <div className="flex flex-col md:gap-2 3xl:gap-10">
              <span className="text-[#838383] md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl">
                01.
              </span>
              <span className="font-semibold 2md:text-xl xl:text-3xl 3xl:text-4xl">
                Restauration
              </span>
            </div>
            <span className="text-[#838383] md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg">
              Savourez une cuisine délicieuse à bord, avec des options pour tous
              les goûts, y compris des menus spéciaux pour les enfants.
            </span>
          </div>
          <div className="bg-[url('/public/static/images/restauration.png')] bg-cover bg-center md:h-[9.5rem] md:rounded-xl 2md:h-[10rem] xl:h-[13rem] 3xl:h-[19rem] 3xl:rounded-3xl"></div>
        </div>
        <div className="flex flex-col md:gap-2 xl:gap-4 3xl:gap-5">
          <div className="grid grid-cols-2 md:gap-2 xl:gap-4 3xl:gap-5">
            <div className="bg-[url('/public/static/images/wifi.png')] bg-cover bg-center md:rounded-xl 2md:h-[12rem] xl:h-full 3xl:rounded-3xl"></div>
            <div className="flex grow flex-col justify-between bg-[#CDCDCD] text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:gap-6 3xl:rounded-3xl 3xl:px-6 3xl:py-10">
              <div className="flex flex-col md:gap-2 3xl:gap-10">
                <span className="text-black md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl">
                  03.
                </span>
                <span className="font-semibold text-[#797979] 2md:text-xl xl:text-3xl 3xl:text-3xl">
                  Wifi et Connectivité
                </span>
              </div>
              <span className="text-black md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg">
                Restez connecté tout au long de votre voyage grâce à notre
                service Wi-Fi disponible dans les espaces communs et certaines
                cabines.
              </span>
            </div>
          </div>
          <div className="grid grow grid-cols-3 md:gap-2 xl:gap-4 3xl:gap-5">
            <div className="flex grow flex-col justify-between bg-[#EBEBEB] text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:rounded-3xl 3xl:px-6 3xl:py-10">
              <div className="flex flex-col md:gap-2 3xl:gap-10">
                <span className="text-[#838383] md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl">
                  02.
                </span>
                <span className="font-semibold text-black 2md:text-xl xl:text-3xl 3xl:text-3xl">
                  Divertissement
                </span>
              </div>
              <span className="text-[#838383] md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg">
                Ne vous ennuyez jamais avec notre large choix de
                divertissements, incluant un cinéma, des spectacles en direct,
                et des zones de jeux pour enfants.
              </span>
            </div>
            <div className="bg-[url('/public/static/images/shopping.png')] bg-cover bg-center md:rounded-xl 3xl:rounded-3xl"></div>
            <div className="flex grow flex-col justify-between bg-[#6C6C6C] text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:rounded-3xl 3xl:px-6 3xl:py-10">
              <div className="flex flex-col md:gap-2 3xl:gap-10">
                <span className="text-[#E] md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl">
                  04.
                </span>
                <span className="font-semibold 2md:text-xl xl:text-3xl 3xl:text-3xl">
                  Shopping à bord
                </span>
              </div>
              <span className="text-[#E3E3E3] md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg">
                Profitez de notre boutique détaxée pour acheter des souvenirs,
                des articles de mode, et des produits de luxe.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
