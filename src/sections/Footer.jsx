import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Footerlogo" width={150} height={46} />
          </a>
          <p className="text-base mt-6 font-montserrat text-white-400 sm:max-w-sm leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                <img src={social.src} alt={social.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white text-2xl mb-6 leading-normal font-montserrat font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 mt-3 font-montserrat leading-normal text-base hover:text-slate-gray "
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-sm:items-center max-sm:flex-col mt-24 text-white-400">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copy Right Logo"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All Rights Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
