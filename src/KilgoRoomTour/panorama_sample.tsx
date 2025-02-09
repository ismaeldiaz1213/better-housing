import React, { useRef } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

// Image files
import firstPhoto from "./IMG_4044.png";
import secondPhoto from "./IMG_4046.png";
import thirdPhoto from "./IMG_4048.png";
import { Button } from "@cloudscape-design/components";

function Panorama() {
  const instanceRef = useRef<any>(null);

  const plugins:[typeof VirtualTourPlugin, { renderMode: string }][] = [
    [VirtualTourPlugin, { renderMode: "3d" }]
  ];

  const handleReady = (instance: any) => {
    instanceRef.current = instance;

    // Safe check for null
    const virtualTour = instanceRef.current?.getPlugin(VirtualTourPlugin);
    
    if (virtualTour) {
      virtualTour.setNodes([
        {
          id: "1",
          panorama: firstPhoto,
          name: "One",
          links: [{ nodeId: "2", position: { textureX: 100, textureY: 1800 } }],
          defaultZoomLvl: 0,
        },
        {
          id: "2",
          panorama: secondPhoto,
          name: "Two",
          links: [
            { nodeId: "1", position: { textureX: 3500, textureY: 1800 } },
            { nodeId: "3", position: { textureX: 100, textureY: 1800 } },
          ],
          defaultZoomLvl: 0,
        },
        {
          id: "3",
          panorama: thirdPhoto,
          name: "Three",
          links: [{ nodeId: "2", position: { textureX: 3500, textureY: 1800 } }],
          defaultZoomLvl: 0,
        },
      ]);
    }
  };

  return (
    <>
      <ReactPhotoSphereViewer
        src={firstPhoto}
        plugins={plugins}
        height={"100vh"}
        width={"100vw"}
        onReady={handleReady}
      />
    </>
  );
}

export default Panorama;
