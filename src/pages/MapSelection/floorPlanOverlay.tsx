import React, { useEffect, useState } from 'react';
import './floorPlan.css';
import floorPlan from '../../KilgoFloorPlans/24-25 Kilgo-floor1-houseP.png';
import { Badge, BadgeProps, Box, Button, Header, Link, Modal, SpaceBetween } from '@cloudscape-design/components';
import { getRoomStatus, roomType } from '../MapSelection/floorPlanRequests';

type RoomButtonProps = {
    roomNumberString: string;
    roomOccupancy: string;
    bedATaken: boolean;
    bedBTaken?: boolean;
    x: number;
    y: number;
};

const FloorPlanOverlay: React.FC = () => {
    const [roomData, setRoomData] = useState<roomType[]>([]);

    // Fetch the room status data on component mount
    useEffect(() => {
        const rooms = getRoomStatus();
        setRoomData(rooms);
    }, []);

    return (
        <div className="image-container">
            <img
                src={floorPlan}
                alt="background"
                className="background-image"
            />
            <div className="button-container">
                {roomData.map((room, index) => (
                    <RoomButton
                        key={index}
                        roomNumberString={room.roomNumberString}
                        x={room.xCoord} // Ensure you have the xCoord property in your data structure
                        y={room.yCoord} // Ensure you have the yCoord property in your data structure
                        roomOccupancy={room.occupancyStatus}
                        bedATaken={room.bedATaken}
                        bedBTaken={room.bedBTaken}
                    />
                ))}
            </div>
            <Box margin="m" padding="m">
                <Button href="/map-selection">
                    Back
                </Button>
            </Box>
        </div>
    );
};

const RoomButton: React.FC<RoomButtonProps> = ({ roomNumberString, x, y , roomOccupancy, bedATaken, bedBTaken}) => {
    const [visible, setVisible] = React.useState(false);

    const handleButtonClick = () => {
        setVisible(!visible);
    };

    const determineColor = ():BadgeProps["color"] =>{
        if(roomOccupancy === 'Vacant'){
            return 'green';
        } else if (roomOccupancy === 'Occupied'){
            return 'red'
        } else if (roomOccupancy === 'semiOccupied') {
            return 'severity-medium';
        }
        return 'severity-low';
    };

    return (
        <div
            className="button"
            style={{
                position: 'absolute',
                top: `${y}%`,
                left: `${x}%`,
            }}
        >
            <Box>
                <SpaceBetween direction="vertical" alignItems="center" size="xs">
                    <Button onClick={handleButtonClick}>
                        {roomNumberString}
                        <Modal
                            onDismiss={() => setVisible(false)}
                            visible={visible}
                            size="medium"
                            footer={
                                <Box float="right">
                                    <Button variant="link">Cancel</Button>
                                </Box>
                            }
                            header={'Room: ' + roomNumberString}
                        >
                            <SpaceBetween direction="vertical" size="s">
                                <Link variant="primary">
                                    Room Tour
                                </Link>
                                <Header
                                    variant="h3"
                                    actions={
                                        <SpaceBetween direction="horizontal" size="xs">
                                            <Button variant="primary" href="/review" disabled={bedATaken}>
                                                Reserve
                                            </Button>
                                        </SpaceBetween>
                                    }
                                >
                                    {roomNumberString + "A"}
                                </Header>
                                <Header
                                    variant="h3"
                                    actions={
                                        <SpaceBetween direction="horizontal" size="xs">
                                            <Button variant="primary" href="/review" disabled={bedBTaken}>
                                                Reserve
                                            </Button>
                                        </SpaceBetween>
                                    }
                                >
                                    {roomNumberString + "B"}
                                </Header>
                            </SpaceBetween>
                        </Modal>
                    </Button>
                    <Badge color={determineColor()}> {roomOccupancy} </Badge> {/* You could dynamically change the color based on occupancyStatus */}
                </SpaceBetween>
            </Box>
        </div>
    );
};

export default FloorPlanOverlay;
