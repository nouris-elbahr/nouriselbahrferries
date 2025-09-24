import Histoire from "../components/features/about/Histoire";
import Title from "../components/features/about/Title";
import Valeurs from "../components/features/about/Valeurs";
import Vision from "../components/features/about/Vision";

function Apropos() {
  return (
    <div className="mx-auto max-w-[80%]">
      <Title />
      <div className="space-y-36 md:space-y-40 3xl:space-y-40">
        <Histoire />
        <Vision />
        <Valeurs />
      </div>
    </div>
  );
}

export default Apropos;
