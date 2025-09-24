import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const classNameItem = `overflow-hidden rounded-xl md:rounded-2xl p-1 md:p-2 border border-[#ffdd0e] 3xl:gap-7 3xl:rounded-2xl 3xl:border-[1px] 3xl:px-5 3xl:py-5 3xl:text-lg`;
const classNameTitleSpan = `text-xl pr-2 text-left ls:text-base ls:text-[1.075rem] md:text-xl md:text-[1.25rem] - 3xl:text-[1.4rem] 3xl:font-medium 3xl:leading-6 text-sm`;
const classNameTrigger = `px-3 py-2 flex justify-between items-start hover:no-underline`;
const classNameContent = `text-base px-3 pb-2 text ls:text-base md:text-lg 3xl:text-lg`;
function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-2 md:text-xl"
    >
      <AccordionItem value="item-1" className={classNameItem}>
        <AccordionTrigger className={classNameTrigger}>
          <span className={classNameTitleSpan}>
            Quels sont les tarifs pour une traversée en ferry ?
          </span>
        </AccordionTrigger>
        <AccordionContent className={classNameContent}>
          Les tarifs varient en fonction de la destination, de la saison et du
          type de billet. Visitez notre section &quot;Réservations&quot; pour
          obtenir un devis personnalisé et consulter nos offres spéciales.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className={classNameItem}>
        <AccordionTrigger className={classNameTrigger}>
          <span className={classNameTitleSpan}>
            Quelles sont les destinations proposées par votre service de ferry ?
          </span>
        </AccordionTrigger>
        <AccordionContent className={classNameContent}>
          Les tarifs varient en fonction de la destination, de la saison et du
          type de billet. Visitez notre section &quot;Réservations&quot; pour
          obtenir un devis personnalisé et consulter nos offres spéciales.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className={classNameItem}>
        <AccordionTrigger className={classNameTrigger}>
          <span className={classNameTitleSpan}>
            Puis-je embarquer avec ma voiture ou mon vélo ?
          </span>
        </AccordionTrigger>
        <AccordionContent className={classNameContent}>
          Les tarifs varient en fonction de la destination, de la saison et du
          type de billet. Visitez notre section &quot;Réservations&quot; pour
          obtenir un devis personnalisé et consulter nos offres spéciales.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionDemo;
