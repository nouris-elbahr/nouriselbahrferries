import { useState } from "react";
import arrowUp from "/public/static/images/arrow-up.svg";
import arrowDown from "/public/static/images/arrow-down.svg";

function QnA({ question, answer }) {
  const [open, setOpen] = useState(false);
  question = question || `Quels sont les tarifs pour une traversée en ferry ?`;
  answer =
    answer ||
    `Les tarifs varient en fonction de la destination, de la saison et du
        type de billet. Visitez notre section "Réservations" pour
        obtenir un devis personnalisé et consulter nos offres spéciales.`;
  if (!open) {
    return (
      <div
        className="cur flex cursor-pointer flex-col gap-7 rounded-2xl border-[1px] border-[#CBCBCB] px-5 py-5"
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        <div className="flex items-center justify-between gap-24">
          <span className="text-[1.4rem] font-medium">{`${question}`}</span>
          <img src={arrowDown} />
        </div>
      </div>
    );
  } else {
    answer = `Les tarifs varient en fonction de la destination, de la saison et du
        type de billet. Visitez notre section "Réservations" pour
        obtenir un devis personnalisé et consulter nos offres spéciales.`;
  }
  return (
    <div
      className="flex cursor-pointer flex-col gap-7 rounded-2xl border-[1px] border-nouris px-5 py-5"
      onClick={() => {
        setOpen((open) => !open);
      }}
    >
      <div className="flex items-center justify-between gap-24">
        <span className="text-[1.4rem] font-medium">{`${question}`}</span>
        <img src={arrowUp} />
      </div>
      <div className="text-[#484848]">{`${answer}`}</div>
    </div>
  );
}

export default QnA;
