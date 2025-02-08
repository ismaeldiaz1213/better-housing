import { Button, ButtonDropdown } from "@cloudscape-design/components";
import React from "react";
import './style.css';

const MapSelection: React.FC = () => {
  return (
    <>
      <h1>Room Selection</h1>
      <ButtonDropdown
         items={[
          { text: "Delete", id: "rm", disabled: false },
          { text: "Move", id: "mv", disabled: false },
          { text: "Rename", id: "rn", disabled: true },
          {
            id: "view",
            text: "View metrics",
            href: "https://example.com",
            external: true,
            externalIconAriaLabel: "(opens in new tab)"
          }
        ]}
      >

      </ButtonDropdown>
    </>
  );
};

export default MapSelection;
