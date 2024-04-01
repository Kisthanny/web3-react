import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container text-lg text-nowrap font-montserrat leading-normal">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={129} height={29} />
        </a>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((navItem) => (
            <li key={navItem.href} className="text-slate-gray">
              <a href={navItem.href}>{navItem.label}</a>
            </li>
          ))}
        </ul>
        <a className="max-lg:hidden text-zinc-950 font-medium" href="/">
          Sign in / Explore now
        </a>
        <a href="/" className="lg:hidden">
          <img src={hamburger} alt="Collapse" width={25} height={25} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
