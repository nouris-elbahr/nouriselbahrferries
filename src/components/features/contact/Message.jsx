import mail from "/public/static/images/mail.svg";
import phone from "/public/static/images/phone.svg";
import map from "/public/static/images/map.svg";
import ReserverMultiBox from "@/components/ui/ReserverMultiBox";

function Message() {
  return (
    // <div className="pb-[10rem]">
    //   <div className="h-[30rem] overflow-hidden rounded-3xl bg-[url('/public/static/images/sub.png')] bg-cover bg-center">
    //     <div className="flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-r from-[#0000003D] to-[#66666699]">
    //       <div className="flex flex-col items-center justify-center gap-16">
    //         <span className="w-[55%] text-center text-4xl font-medium text-white">
    //           Remplissez le formulaire ci-dessous pour poser vos questions ou
    //           faire une demande
    //         </span>
    //         <div className="flex w-[80%] flex-col gap-2 3xl:flex-row">
    //           <input
    //             className="block h-14 rounded-full border-[1px] bg-[#0000004D] px-8 py-5 text-white placeholder:font-sans placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none"
    //             placeholder="Nom et Prénom"
    //           ></input>
    //           <input
    //             className="block h-14 rounded-full border-[1px] bg-[#0000004D] px-8 py-5 text-white placeholder:font-sans placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none"
    //             placeholder="Email"
    //           ></input>
    //           <input
    //             className="block h-14 w-[100%] rounded-full border-[1px] bg-[#0000004D] px-8 py-5 text-white placeholder:font-sans placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none"
    //             placeholder="Ajouter quelque chose .."
    //           ></input>
    //           <button className="rounded-full bg-white px-12 py-3 font-sans text-sm font-medium transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black">
    //             Envoyer
    //           </button>
    //         </div>
    //         <div className="flex flex-col gap-4 text-lg font-light text-white">
    //           <div className="flex justify-center gap-10">
    //             <div className="flex gap-2">
    //               <img src={mail} />
    //               <span>contact@nouriselbahrferries.com</span>
    //             </div>
    //             <div className="flex gap-2">
    //               <img src={phone} />
    //               <span>023 78 91 48</span>
    //             </div>
    //           </div>
    //           <div className="flex gap-2">
    //             <img src={map} />
    //             <span>
    //               Adresse : 40, coopérative les communaux, propriété 256,
    //               section 43, étage 02, Kouba, Alger.
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <ReserverMultiBox />
  );
}

export default Message;
