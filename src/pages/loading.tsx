import * as React from "react";
import Flashbar, { FlashbarProps } from "@cloudscape-design/components/flashbar";

const FlashbarComponent: React.FC = () => {
const [items, setItems] = React.useState<FlashbarProps.MessageDefinition[]>([
    {
      loading: true,
       type: "success",
      content: "Logging in ...",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]), // This now correctly updates the state
      id: "message_1",
    },
  ]);

  return <Flashbar items={items} />;
};

export default FlashbarComponent;
