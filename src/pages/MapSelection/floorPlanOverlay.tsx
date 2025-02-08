import React from 'react';
import 'floorPlan.css';
import floorPlan from '../../KilgoFloorPlans/24-25 Kilgo-1.png';

const FloorPlanOverlay: React.FC = () => {
    return (
        <div className="image-container">
            <img
                src= 'floorPlan'
                alt="background"
                className="background-image"
            />
            {/* Your React components */}
            <div className="overlay-text">
                <h1>Overlay Text Here</h1>
            </div>
            <div className="button-container">
                <button>Click Me</button>
            </div>
    </div>
    );
};

export default FloorPlanOverlay;