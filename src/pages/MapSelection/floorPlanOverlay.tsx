import React from 'react';
import './floorPlan.css';
import floorPlan from '../../KilgoFloorPlans/24-25 Kilgo-floor1-houseP.png';
import picture from '../../pictureIcon.svg';
import { Badge, Box, Button, Header, Link, Modal, SpaceBetween } from '@cloudscape-design/components';

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
    { roomNumberString: 'P-101', xCoord: 5, yCoord: 52 },
    { roomNumberString: 'P-102', xCoord: 5, yCoord: 34 },
    { roomNumberString: 'P-103', xCoord: 20, yCoord: 52 },
    { roomNumberString: 'P-104', xCoord: 30, yCoord: 32 },
    { roomNumberString: 'P-105', xCoord: 36, yCoord: 53 }, // Format x% from left, y% from top with (0,0) being top left
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
            <Box margin='m' padding='m'>
                <Button href='/map-selection'>
                    Back
                </Button>
            </Box>
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
                            size="medium"
                            footer={
                                <Box float="right">
                                    <Button variant="link">Cancel</Button>
                                </Box>
                            }
                            header={'Room: '+roomNumberString}
                            >
                                <SpaceBetween direction='vertical' size='s'>
                                    <Link variant='primary'>
                                        Room Tour
                                    </Link>
                                    <Header
                                        variant='h3'
                                        actions={
                                            <SpaceBetween direction="horizontal" size="xs">
                                            <Button variant="primary" href='/review'>
                                                Reserve
                                            </Button>
                                            </SpaceBetween>
                                        }
                                    >
                                        {roomNumberString + "A"}
                                    </Header>
                                    <Header
                                        variant='h3'
                                        actions={
                                            <SpaceBetween direction="horizontal" size="xs">
                                            <Button variant="primary" href='/review'>
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
                    <Badge color='green'> Vacant </Badge>
                </SpaceBetween>
            </Box>
        </div>
    );
};

export default FloorPlanOverlay;