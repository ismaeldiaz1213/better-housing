// reportWebVitals.ts
import { ReportHandler, getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Define the reportWebVitals function with the correct type for onPerfEntry
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Now the correct type (Metric) is used for the functions
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
