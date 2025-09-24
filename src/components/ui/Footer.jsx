import insta from "/public/static/images/instagram.svg";
import linkedin from "/public/static/images/linkedin.svg";
import facebook from "/public/static/images/facebook.svg";
import icon from "/public/static/images/icon.png";
import { Button } from "./button";
function Footer() {
  return (
    <div className="flex flex-col gap-16 bg-nouris2 px-5 py-8 text-sm font-light text-white sm:text-lg md:text-xl 2md:grid 2md:grid-cols-[3fr,2fr] 2md:px-16 2md:py-7 3xl:px-60 3xl:py-16">
      <div className="flex flex-col gap-2 3xl:gap-6">
        <div>
          <img
            src={icon}
            className="h-16 grayscale invert 2md:block 2md:h-[3rem] 3xl:h-[5rem]"
          />
        </div>
        <div className="md:w-[70%] 2md:w-[85%] 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg">
          Suivez-nous sur les réseaux sociaux pour rester informé de nos
          dernières nouvelles, offres exclusives, et plus encore
        </div>
        <div className="flex gap-2 2md:gap-3 lg:gap-4 3xl:gap-5">
          <Button variant="primary" size="icon">
            <img className="md:h-10 2md:h-7 3xl:h-12" src={insta} />
          </Button>
          <Button variant="primary" size="icon">
            <img className="md:h-10 2md:h-7 3xl:h-12" src={linkedin} />
          </Button>
          <Button variant="primary" size="icon">
            <img className="md:h-10 2md:h-7 3xl:h-12" src={facebook} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 2md:text-start 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg">
        <div className="flex flex-col items-start gap-2 lg:gap-4 3xl:gap-5">
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Company
          </Button>
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            About
          </Button>

          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Blog
          </Button>
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Contact
          </Button>
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Career
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2 lg:gap-4 3xl:gap-5">
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Career
          </Button>
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            FAQs
          </Button>
          <Button
            variant="link"
            className="text-start text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Support Center
          </Button>
        </div>
        <div className="flex flex-col items-start gap-2 lg:gap-4 3xl:gap-5">
          <button className="px-4 text-start font-medium text-white hover:underline 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg">
            Become a member
          </button>
          <Button
            variant="link"
            className="text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg"
          >
            Events
          </Button>
          <a
            href="/static/pdfs/terms_and_conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 text-start font-medium text-white hover:underline inline-block"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
