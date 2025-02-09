import React from 'react';
import './floorPlan.css';
import floorPlan from '../../KilgoFloorPlans/24-25 Kilgo-floor1-houseP.png';
import { Badge, Box, Button, Container, Modal, SpaceBetween } from '@cloudscape-design/components';

type roomNumberType = {
    roomNumberString: string;
    xCoord: number;
    yCoord: number; 
};

type RoomButtonProps = {
    roomNumberString: string;
    x: number;
    y: number;
};

const roomData: roomNumberType[] = [
    { roomNumberString: 'P-101', xCoord: 5, yCoord: 55 },
    { roomNumberString: 'P-102', xCoord: 5, yCoord: 36 },
    { roomNumberString: 'P-103', xCoord: 20, yCoord: 55 },
    { roomNumberString: 'P-104', xCoord: 30, yCoord: 34 },
    { roomNumberString: 'P-105', xCoord: 36, yCoord: 57 }, // Format x% from left, y% from top with (0,0) being top left
];

const FloorPlanOverlay: React.FC = () => {
    return (
        <div className="image-container">
            <img
                src = {floorPlan}
                alt="background"
                className="background-image"
            />
            {/* Your React components */}
            <div className="button-container">
                {roomData.map((room, index) => (
                    <RoomButton key={index} roomNumberString={room.roomNumberString} x={room.xCoord} y = {room.yCoord} />
                ))}
            </div>
        </div>
    );
};


const RoomButton: React.FC<RoomButtonProps> = ({ roomNumberString, x, y }) => {
    const [visible, setVisible] = React.useState(false);

    const handleButtonClick = () => {
        setVisible(!visible);
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
                <SpaceBetween direction='vertical' alignItems= 'center' size='xs'>
                    <Button onClick={handleButtonClick}>
                        {roomNumberString}
                        <Modal
                            onDismiss={() => setVisible(false)}
                            visible={visible}
                            size="small"
                            footer={
                                <Box float="right">
                                <SpaceBetween direction="horizontal" size="xs">
                                    <Button variant="link">Cancel</Button>
                                    <Button variant="primary">Ok</Button>
                                </SpaceBetween>
                                </Box>
                            }
                            header="Modal title"
                            >
                            {roomNumberString}
                        </Modal>
                    </Button>
                    <Badge color='green'> Vacant </Badge>
                </SpaceBetween>
            </Box>
            

        </div>
    );
};

export default FloorPlanOverlay;