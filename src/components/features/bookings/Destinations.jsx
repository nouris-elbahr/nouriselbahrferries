import DestBoxes from "@/components/ui/DestBoxes";
import reservez from "/public/static/images/reservez.svg";
import { useRef } from "react";
import ReserverBox from "@/components/ui/ReserverBox";

function Destinations() {
  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className="space-y-7">
      <h1 className="text-center text-4xl text-[2.5rem] font-bold tracking-[-0.08em] text-[#3C3C3C] ls:text-4xl ls:text-[2.5rem] 2md:text-6xl lg:text-7xl xl:text-6xl xl:text-[4.25rem] 3xl:text-8xl">
        DESTINATIONS
      </h1>
      <DestBoxes onClick={scrollToSection} />
      <img src={reservez} className="w-[100%] pb-16" />
      <ReserverBox targetRef={targetRef} />
    </div>
  );
}

export default Destinations;
