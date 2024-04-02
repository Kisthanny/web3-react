import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const FooterItem = ({ item }) => {
  const { title, links } = item;
  return (
    <div className="font-montserrat">
      <p className="text-2xl font-medium">{title}</p>
      <ul className="text-white-400 leading-9 mt-6">
        {links.map((link) => (
          <li>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <section className="max-container relative">
      <div className="flex max-lg:flex-col gap-20 pb-32">
        <div className="flex flex-col items-start gap-6 sm:max-w-sm">
          <img width={150} className="" src={footerLogo} alt="Logo" />
          <p className="font-montserrat text-white-400 leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul className="flex items-center gap-5 mt-2">
            {socialMedia.map((e) => (
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <img width={24} height={24} src={e.src} alt={e.alt} />
              </div>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-wrap gap-10 justify-between max-lg:max-w-[592px] max-lg:gap-20">
          {footerLinks.map((e) => (
            <FooterItem item={e} />
          ))}
        </div>
      </div>
      <div className="hover:cursor-pointer absolute left-0 right-0 -bottom-16 font-montserrat text-white-400 flex items-center justify-between max-sm:flex-col max-sm:bottom-0">
        <p className="flex items-center gap-2">
          <img src={copyrightSign} alt="copyright sign" />
          <span>Copyright. All rights reserved.</span>
        </p>
        <p>Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
