import logo from "../assets/logo.png";
import LiNavLink from "./LiNavLink";
export default function NavBar() {
  const links = [
    { title: "Adidas", link: "https://www.adidas.es" },
    { title: "Google", link: "https://www.google.es" },
    { title: "Youtube", link: "https://www.youtube.es" },
  ];

  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        {links.map((link) => {
          return <LiNavLink key={link.title} link={link.link} title={link.title} />
            
        })}
      </ul>
    </nav>
  );
}
