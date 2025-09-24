import React from "react";

const commonClasses = `
    inline-flex items-center justify-center
    text-xs md:text-2xs md:font-light
    2md:font-normal 2md:text-[0.65rem] 2md:leading-[0.6rem]
    3xl:text-lg xl:text-base lg:text-sm lg:font-light
    text-white
    3xl:px-10 md:px-5 2md:px-[1.3rem] xl:px-[1.7rem]
    3xl:py-3 xl:py-2 md:py-[0.5rem]
    3xl:my-1 xl:my-1 md:my-[0.1rem]
    transition-all duration-300 ease-in-out
    rounded-full font-semibold
    bg-gradient-to-r from-[#3EC0F0] to-[#00B8FF]
    hover:from-[#36ACD9] hover:to-[#009EE6]
    focus:outline-none focus:ring-2 focus:ring-[#3EC0F0] focus:ring-offset-2
    shadow-md hover:shadow-xl
    hover:scale-[1.03]
    active:scale-95
`;

export default function HeaderButton({
  href,
  onClick,
  children,
  isLink = true,
}) {
  if (isLink) {
    return (
      <a href={href} className={commonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
}
