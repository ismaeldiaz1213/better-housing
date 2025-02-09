import React from 'react';
import './floorPlan.css';
import floorPlan from '../../KilgoFloorPlans/24-25 Kilgo-2.png';
import { Badge, Button, Popover } from '@cloudscape-design/components';

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
    { roomNumberString: 'P-105', xCoord: 10, yCoord: 20 }, // 10% from left, 20% from top
    { roomNumberString: 'P-106', xCoord: 40, yCoord: 40 },
    { roomNumberString: 'J-107', xCoord: 70, yCoord: 60 },
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
    const [isPopoverVisible, setPopoverVisible] = React.useState(false);

    const handleButtonClick = () => {
        setPopoverVisible(!isPopoverVisible);
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
            <button onClick={handleButtonClick}>
                {roomNumberString}
            </button>

            {/* Conditionally render the Popover when the button is clicked */}
            {isPopoverVisible && (
                <Popover
                    position="top"
                    size="small"
                    content={<div>Details about {roomNumberString}</div>}
                />
            )}
        </div>
    );
};

export default FloorPlanOverlay;