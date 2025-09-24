import Capacite from "../components/features/cracovia/Capacite";
import Pourquoi from "../components/features/cracovia/Pourquoi";
import Securite from "../components/features/cracovia/Securite";
import ServicesAnim from "../components/features/cracovia/ServicesAnim";
import Specs from "../components/features/cracovia/Specs";
import Title from "../components/features/cracovia/Title";

function Cracovia() {
  return (
    <div className="mx-auto max-w-[80%] space-y-16 md:space-y-20 3xl:space-y-40">
      <Title />
      <Specs />
      <ServicesAnim />
      <Capacite />
      <Securite />
      <Pourquoi />
    </div>
  );
}

export default Cracovia;
