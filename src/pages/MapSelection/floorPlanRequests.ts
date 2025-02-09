export type roomType = { //Examples for each type below
    floor: string; //Basement
    roomNumberString: string; //P-101
    bedATaken: boolean;
    bedBTaken?: boolean;
    occupancyStatus: string;  //Vacant, Occupied, inReview, semiOccupied 
    xCoord: number;
    yCoord: number;
    roomType?: string; // Double or single
};

export function getRoomStatus() {
    const rooms: roomType[] = [
        {
            floor: "1",
            roomNumberString: "P-101",
            bedATaken: true,
            bedBTaken: true,
            roomType: "Double",
            occupancyStatus: "Occupied",
            xCoord: 5, // Add this if missing
            yCoord: 52, // Add this if missing
        },
        {
            floor: "1",
            roomNumberString: "P-102",
            bedATaken: false,
            bedBTaken: true,
            roomType: "Double",
            occupancyStatus: "Semi-Occupied",
            xCoord: 5, 
            yCoord: 34, 
        },
        {
            floor: "1",
            roomNumberString: "P-103",
            bedATaken: false,
            bedBTaken: false,
            roomType: "Double",
            occupancyStatus: "In-Review",
            xCoord: 20, 
            yCoord: 52, 
        },
        {
            floor: "1",
            roomNumberString: "P-104",
            bedATaken: false,
            bedBTaken: false,
            roomType: "Double",
            occupancyStatus: "Vacant",
            xCoord: 30, 
            yCoord: 32, 
        },
        {
            floor: "1",
            roomNumberString: "P-105",
            bedATaken: true,
            bedBTaken: true,
            roomType: "Double",
            occupancyStatus: "Occupied",
            xCoord: 36, 
            yCoord: 53, 
        },
        // Add similar coordinates for other rooms
    ];
    return rooms; 
};
