import { Box, Select, Container, ContentLayout, Header } from "@cloudscape-design/components";
import React from "react";
import './style.css';
import FloorPlanOverlay from "./floorPlanOverlay";
//import { useNavigate } from 'react-router-dom';

const MapSelection: React.FC = () => {
  const [floorPosition, setFloorPosition] = React.useState("1st Floor");
  const [housePosition, setHousePosition] = React.useState("House O");

  // Floor data with nested houses
  const floorData = [
    {
      label: "1st Floor",
      value: "1st Floor",
      houses: [
        { label: "House O", value: "House O" },
        { label: "House J", value: "House J" },
        { label: "House K", value: "House K" },
      ]
    },
    {
      label: "2nd Floor",
      value: "2nd Floor",
      houses: [
        { label: "House P", value: "House P", href: "#" },
        { label: "House Q", value: "House Q", href: "#" },
      ]
    },
    {
      label: "3rd Floor",
      value: "3rd Floor",
      houses: [
        { label: "House A", value: "House A" },
        { label: "House B", value: "House B" },
      ]
    }
  ];

  // Handle selection of floor and house
  const handleSelection = (event: any) => {
    const { value } = event.detail.selectedOption;

    // Find floor and house based on the combined value (floor - house)
    const [selectedFloor, selectedHouse] = value.split(" - ");

    // Update the floor and house position states
    setFloorPosition(selectedFloor);
    setHousePosition(selectedHouse);

    //navigate(`/floor/${selectedFloor}/house/${selectedHouse}`);
  };

  // Create options with nested house options
  const selectOptions = floorData.map(floor => ({
    label: floor.label,
    value: floor.value,
    options: floor.houses.map(house => ({
      label: house.label,
      value: `${floor.value} - ${house.value}`, // Combine floor and house to identify the unique selection
    }))
  }));

  // Set the currently selected option, combining the floor and house
  const selectedOption = `${floorPosition} - ${housePosition}`;

  return (
    <>
      <ContentLayout
        defaultPadding
        headerBackgroundStyle="linear-gradient(135deg, rgb(34, 49, 20) 0%, rgb(139, 195, 74) 100%)"
        headerVariant="high-contrast"
        header={<Header variant="h1">Kilgo Residence Quad</Header>}
      >
        <Container
          header={
            <Header variant="h2">Room Selection - {floorPosition} - {housePosition}</Header>
          }
        >
          <Box margin="xxs" padding="xxs" textAlign="left">
            {/* Single Select for Floor and House */}
            <Select
              selectedOption={{ label: `${housePosition} (${floorPosition})`, value: selectedOption }}
              onChange={handleSelection}
              options={selectOptions}
            />
          </Box>
          
          <FloorPlanOverlay />

        </Container>
      </ContentLayout>
    </>
  );
};

export default MapSelection;
