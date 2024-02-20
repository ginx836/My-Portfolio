import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width">
      {/* copyright text */}
      <p className=" text-grey-600 text-center text-sm">
        Copyright &copy; {new Date().getFullYear()} GinxDev. Tous droits
        réservés
      </p>
    </footer>
  );
};

export default Footer;
