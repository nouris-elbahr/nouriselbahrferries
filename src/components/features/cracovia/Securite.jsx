function Securite() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold md:mb-7 md:text-4xl lg:text-5xl xl:text-6xl 3xl:mb-14 3xl:text-7xl">
        <span className="text-nouris">Sécurité </span>
        et Confirmité
      </h1>
      <div className="flex flex-col gap-4 md:gap-4 2md:grid 2md:grid-cols-[5fr,6fr] 3xl:gap-5">
        <div className="h-[30vh] w-[100%] rounded-2xl bg-[url('/public/static/images/securite.png')] bg-cover bg-center ls:h-[50vh] md:rounded-lg 2md:h-[100%] lg:rounded-xl 3xl:rounded-2xl"></div>
        <span className="text-lg md:text-xs lg:text-base xl:text-lg xl:leading-7 3xl:text-[1.45rem] 3xl:leading-[2rem]">
          La sécurité de nos passagers et de notre équipage est notre priorité
          absolue. Le Cracovia est conforme à toutes les exigences des
          Conventions internationales et aux recommandations de
          l&apos;Organisation Maritime Internationale (OMI). Notre navire est
          équipé des dernières technologies en matière de sécurité maritime,
          garantissant une navigation stable et sécurisée même dans des
          conditions difficiles.
        </span>
      </div>
    </div>
  );
}

export default Securite;
