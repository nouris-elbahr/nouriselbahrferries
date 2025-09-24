// import { Accordion } from "@radix-ui/react-accordion";
import QnA from "../../ui/QnA";
import AccordionDemo from "@/components/ui/AccordionDemo";

function FAQ() {
  return (
    <div className="flex grid-cols-2 flex-col gap-5 space-y-5 pb-[7rem] ls:grid 3xl:pb-[15rem]">
      <div className="flex grow flex-col space-y-5">
        <div className="text-4xl font-bold md:mb-5 2md:mb-2 2md:text-5xl xl:text-[3.5rem] xl:leading-[1] 3xl:mb-8 3xl:text-7xl">
          <span>Frequently </span>
          <span className="text-nouris">asked questions</span>
        </div>
        <span className="text-lg font-medium text-[#414141] md:mb-4 2md:text-base lg:text-[1.1rem] xl:text-xl 3xl:mb-5 3xl:text-2xl">
          Consultez notre section FAQ pour obtenir des réponses à vos questions
          sur les réservations, les bagages, et plus encore.
        </span>
      </div>
      <AccordionDemo />
    </div>
  );
}

export default FAQ;
