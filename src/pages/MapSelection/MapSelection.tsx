import { Box, ButtonDropdown, Container, ContentLayout, Header } from "@cloudscape-design/components";
import React from "react";
import './style.css';
import FloorPlanOverlay from "./floorPlanOverlay";

const MapSelection: React.FC = () => {
  const [floorPosition, setFloorPosition] = React.useState("1st Floor");

  const floorItems = [
    { text: "Basement", id: "Basement", disabled: false, href: "#" },
    { text: "1st Floor", id: "1st Floor", disabled: false, href: "#" },
    { text: "2nd Floor", id: "2nd Floor", disabled: false, href: "#" },
    { text: "3rd Floor", id: "3rd Floor", disabled: false, href: "#" },
    { text: "4th Floor", id: "4th Floor", disabled: false, href: "#" },
    { text: "5th Floor", id: "5th Floor", disabled: false, href: "#" },
  ];

  return (
    <>
      <ContentLayout
        defaultPadding
        headerBackgroundStyle="linear-gradient(135deg, rgb(34, 49, 20) 0%, rgb(139, 195, 74) 100%)"
        headerVariant="high-contrast"
        maxContentWidth={1000}
        header={<Header variant="h1">Kilgo Residence Quad</Header>}
      >
        <Container
          header={
            <Header variant="h2">Room Selection - {floorPosition}</Header>
          }
        >
          <Box margin="xxs" padding="xxs" textAlign="left">
            <ButtonDropdown
              items={floorItems}
              onItemClick={(item) => setFloorPosition(item.detail.id)} 
            >
              {/*TODO: The onItemCLick could use improvement*/}
                
              Floor Selection
            </ButtonDropdown>
          </Box>
          {/**/}
          <FloorPlanOverlay />
        </Container>
      </ContentLayout>
    </>
  );
};

export default MapSelection;
