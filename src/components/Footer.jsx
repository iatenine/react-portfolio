import React from "react";
import { ContactIcons } from "./ContactIcons";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <span className="float-start">&copy; 2021 Jack Linhart</span>
      <ContactIcons />
    </footer>
  );
};
