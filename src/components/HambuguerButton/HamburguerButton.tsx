import React from "react";

type HamburguerButtonProps = {
  clickEvent(): void;
};
export const HamburguerButton: React.FC<HamburguerButtonProps> = ({
  clickEvent,
}) => (
  <button onClick={clickEvent}>
    <div></div>
    <div></div>
    <div></div>
  </button>
);
