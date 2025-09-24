import { useRef } from "react";
import Apropos from "../components/features/home/Apropos";
import Destinations from "../components/features/home/Destinations";
import LeCracovia from "../components/features/home/LeCracovia";
import Reservez from "../components/features/home/Reservez";
import Services from "../components/features/home/Services";
import Title from "../components/features/home/Title";

function Home() {
  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className="mx-auto max-w-[80%] space-y-16 md:space-y-20 3xl:space-y-40">
      <Title />
      <Destinations onClick={scrollToSection} />
      <LeCracovia />
      <Services />
      <Reservez targetRef={targetRef} />
      <Apropos />
    </div>
  );
}

export default Home;
