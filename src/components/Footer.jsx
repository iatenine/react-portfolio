import React from "react";
import { ContactIcons } from "./ContactIcons";
import Footer from "rjs-sticky-footer/Footer";

export const FooterContent = () => {
  return (
    <>
      <span className="float-start text-white">&copy; 2022 Jack Linhart</span>
      <ContactIcons />
    </>
  );
};

export const FooterWrapper = () => {
  return (
    <Footer
      style={{ color: "white" }}
      background={"black"}
      opacity={0.9}
      footerBody={<FooterContent />}
      isSticky={true}
    />
  );
};
