// src/react-app-env.d.ts (or in a separate .d.ts file)
declare module "*.svg" {
  import { ReactComponent } from 'react-scripts'; // or 'react' if not using Create React App
  const content: ReactComponent;
  export default content;
}
