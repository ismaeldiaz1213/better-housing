import { Box, Select, Container, ContentLayout, Header, ExpandableSection } from "@cloudscape-design/components";
import React from "react";
import { useNavigate } from 'react-router-dom';
import floorPlanBase from '../../KilgoFloorPlans/24-25 Kilgo-1.png';
import floorPlan1 from '../../KilgoFloorPlans/24-25 Kilgo-2.png';
import floorPlan2 from '../../KilgoFloorPlans/24-25 Kilgo-3.png';
import floorPlan3 from '../../KilgoFloorPlans/24-25 Kilgo-4.png';
import floorPlan4 from '../../KilgoFloorPlans/24-25 Kilgo-5.png';
import floorPlan5 from '../../KilgoFloorPlans/24-25 Kilgo-6.png';

const MapSelection: React.FC = () => {
  const [floorPosition, setFloorPosition] = React.useState("Choose a Floor and a House");
  const [housePosition, setHousePosition] = React.useState("");

  const navigate  = useNavigate();

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

    navigate(`/map-selection/floor/${selectedFloor}/house/${selectedHouse}`);
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
            <Header variant="h2">Floor Plan Selection - {floorPosition} - {housePosition}</Header>
          }
        >
          <Box margin="xxs" padding="xxs" textAlign="left">
            {/* Single Select for Floor and House */}
            <p>Select a floor plan using the dropdown below, then select your room in the new page.</p>
            <Select
              selectedOption={{ label: `${housePosition} (${floorPosition})`, value: selectedOption }}
              onChange={handleSelection}
              options={selectOptions}
            />
          </Box>
          <Header variant="h2">Floor Plans for Reference</Header>
          <ExpandableSection headerText="Basement Floor">
          <img
                src = {floorPlanBase}
                alt="basement floor plan"
                className="background-image"
            />
          </ExpandableSection>
          <ExpandableSection headerText="1st Floor">
          <img
                src = {floorPlan1}
                alt="1st floor plan"
                className="background-image"
            />
          </ExpandableSection>
          <ExpandableSection headerText="2nd Floor">
          <img
                src = {floorPlan2}
                alt="2nd floor plan"
                className="background-image"
            />
          </ExpandableSection>
          <ExpandableSection headerText="3rd Floor">
          <img
                src = {floorPlan3}
                alt="3rd floor plan"
                className="background-image"
            />
          </ExpandableSection>
          <ExpandableSection headerText="4thFloor">
          <img
                src = {floorPlan4}
                alt="4th floor plan"
                className="background-image"
            />
          </ExpandableSection>
          <ExpandableSection headerText="5th Floor">
          <img
                src = {floorPlan5}
                alt="5th floor plan"
                className="background-image"
            />
          </ExpandableSection>
        </Container>
      </ContentLayout>
    </>
  );
};

export default MapSelection;
