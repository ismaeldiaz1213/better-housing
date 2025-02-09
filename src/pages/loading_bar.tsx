import * as React from "react";
import LiveRegion from "@cloudscape-design/components/live-region";
import Box from "@cloudscape-design/components/box";

const LoadingBar: React.FC = () => {
    return (
        <LiveRegion>
            <Box
                margin={{ bottom: "xs", left: "l" }}
                color="text-body-secondary"
            >
                Generating a response
            </Box>
        </LiveRegion>
    );
};

export default LoadingBar;