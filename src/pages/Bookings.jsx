import { useRef } from "react";
import Destinations from "../components/features/bookings/Destinations";
import FAQ from "../components/features/bookings/FAQ";
import Title from "../components/features/bookings/Title";

function Bookings() {
  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className="mx-auto max-w-[80%] space-y-16 md:space-y-20 3xl:space-y-40">
      <Title />
      <Destinations onClick={scrollToSection} targetRef={targetRef} />
      <FAQ />
    </div>
  );
}

export default Bookings;
