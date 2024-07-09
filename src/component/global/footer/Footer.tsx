import FooterContent from "./FooterContent";
import FooterHeader from "./FooterHeader";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1A1A1A" }}>
      <div className="px-20">
        <FooterHeader />
        <FooterContent />
      </div>
      <p className="py-10 text-center text-white">
        Copyrights &copy; {new Date().getFullYear()}. JustHome
      </p>
    </div>
  );
};

export default Footer;
