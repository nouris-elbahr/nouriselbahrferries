import { useState } from "react";
import serv1 from "/public/static/images/serv-1.png";
import serv2 from "/public/static/images/serv-2.png";
import serv3 from "/public/static/images/serv-3.png";
import dest from "/public/static/images/dest.svg";

function ServicesAnim() {
  const myDetailedArr = [
    {
      code: "A",
      title: "Divertissement",
      link: serv1,
      text: `Ne vous ennuyez jamais lors de votre traversée grâce aux
                nombreuses options de divertissement disponibles. Le Cracovia
                dispose d'un cinéma, de zones de jeux pour enfants, ainsi
                que d'espaces dédiés aux spectacles en direct et aux
                animations.`,
    },
    {
      code: "B",
      title: "Restaurants et Cafés",
      link: serv2,
      text: `À bord du Cracovia, vous pouvez profiter d'une expérience
                culinaire variée avec plusieurs restaurants et cafés proposant
                des plats locaux et internationaux. Que vous recherchiez un
                repas complet ou une collation rapide, nos établissements
                répondent à toutes vos envies.`,
    },
    {
      code: "C",
      title: "Shopping à Bord",
      link: serv3,
      text: `Faites du shopping en mer avec notre boutique détaxée, où vous trouverez une sélection de souvenirs, d'articles où vous trouverez avec notre boutique détaxée du shopping en mer avec notre en mer avec notre boutique détaxée où vous trouverez une sélection avec notre boutique détaxée.`,
    },
  ];
  const [arrangement, setArrangement] = useState(myDetailedArr);
  const selectedComponent = arrangement[0].code;
  const second1 = arrangement[1].code;
  const second2 = arrangement[2].code;
  const handleClick = (card) => {
    const index = arrangement.findIndex((item) => item.code === card);
    if (index === -1) return;
    const newArr = [...arrangement];
    [newArr[0], newArr[index]] = [newArr[index], newArr[0]];
    setArrangement(newArr);
  };
  return (
    <>
      <div className="space-y-5">
        <div className="text-4xl font-bold md:mb-4 md:text-4xl lg:text-5xl xl:text-6xl 3xl:mb-5 3xl:text-[5rem] 3xl:leading-[5.5rem]">
          <span className="text-nouris">Services </span>
          <span>
            et <br /> commodités à bord
          </span>
        </div>
        <div className="hidden w-[80vw] flex-col gap-3 2md:flex">
          <div className="relative flex md:h-3 lg:h-5 xl:h-7 3xl:h-10">
            {myDetailedArr.map((el) => {
              return (
                <span
                  key={`${el.code}`}
                  className={`absolute transition-all duration-500 ease-in-out md:text-xs lg:text-base xl:text-xl 3xl:text-2xl ${
                    second1 === `${el.code}`
                      ? "translate-x-[calc(40vw+1.25rem)] text-[#00000066]"
                      : second2 === `${el.code}`
                        ? "translate-x-[calc(40vw+17vw+2.5rem)] text-[#00000066]"
                        : "font-bold text-black"
                  } `}
                >
                  {el.title}
                </span>
              );
            })}
          </div>
          <div className="flex md:gap-4 3xl:gap-5">
            <div className="main relative">
              {myDetailedArr.map((el, index) => (
                <div
                  key={index}
                  className={`flex w-[40vw] flex-col transition-opacity duration-500 ease-in-out md:gap-2 3xl:gap-3 ${
                    selectedComponent === `${el.code}`
                      ? "opacity-100"
                      : "pointer-events-none absolute left-0 top-0 opacity-0"
                  } `}
                >
                  <div className="w-full overflow-hidden md:h-[14rem] md:rounded-lg lg:h-[18rem] xl:h-[21rem] xl:rounded-xl 3xl:h-[25rem] 3xl:rounded-[1rem]">
                    <img src={el.link} className="h-full w-full object-cover" />
                  </div>
                  <span className="text-[#484848] md:text-2xs md:leading-3 lg:text-sm 3xl:pb-20 3xl:text-xl">
                    {el.text}
                  </span>
                </div>
              ))}
            </div>

            {[second1, second2].map((element) => {
              return (
                <div className="relative w-[17vw]" key={element}>
                  {myDetailedArr.map((el, index) => (
                    <div
                      key={index}
                      className={`flex flex-col transition-all duration-500 ease-in-out md:gap-2 3xl:gap-3 ${
                        element === `${el.code}`
                          ? "opacity-100"
                          : "pointer-events-none absolute left-0 top-0 opacity-0"
                      } w-full`}
                    >
                      <div className="relative w-full overflow-hidden md:h-[14rem] md:rounded-lg lg:h-[18rem] xl:h-[21rem] 3xl:h-[25rem] 3xl:rounded-[1rem]">
                        <img
                          src={el.link}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#75757599]">
                          <img
                            onClick={() => handleClick(`${el.code}`)}
                            src={dest}
                            className="z-50 inline-block cursor-pointer rounded-full bg-nouris md:p-5 3xl:p-10"
                          />
                        </div>
                      </div>
                      <span className="line-clamp-3 text-[#48484866] md:text-2xs md:leading-3 lg:text-sm 3xl:text-xl">
                        {el.text}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-14 2md:hidden">
          {myDetailedArr.map((el) => (
            <div
              key={el.code}
              className={`flex flex-col transition-opacity duration-500 ease-in-out ${"opacity-100"} grid-cols-2 gap-4 ls:grid`}
            >
              <div className="w-full overflow-hidden">
                <img
                  src={el.link}
                  className="h-full w-full rounded-2xl object-cover ls:rounded-3xl"
                />
              </div>
              <span className="text-lg text-[#484848]">{el.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesAnim;
