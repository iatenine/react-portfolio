import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Icon = (props) => {
  const { icon, name } = props.icon;
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 100, hide: 250 }}
      overlay={(ovProps) => <Tooltip {...ovProps}>{name}</Tooltip>}
    >
      <img
        key={name}
        className="tech-icon m-1"
        src={icon}
        alt={name + " icon"}
      />
    </OverlayTrigger>
  );
};
