import React from "react";
import { Icon } from "./Icon";
import { icons } from "../data/icons";

/* Users have the option to provide a category. Otherwise simply pluralize the prop */

export const IconList = ({ label, category }) => {
  return (
    <div className="justify-content-start d-flex flex-wrap">
      <h3 className="ps-3">{label || category + "s"}</h3>
      <ul>
        {icons
          .filter((icon) => icon.category.match(category))
          .map((icon) => (
            <li key={icon.name} className="d-inline">
              <Icon key={icon.name} icon={icon} />
            </li>
          ))}
      </ul>
    </div>
  );
};
