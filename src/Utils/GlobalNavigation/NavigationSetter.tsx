import { useNavigate } from "react-router-dom";
import Navigator from "./navigationHistory";
import  { FunctionComponent } from 'react'; 


// Set NavigationSetter between BrowserRouter on index.js

export const NavigationSetter: FunctionComponent = () => {
  Navigator.navigate = useNavigate();
  return null;
};

export default NavigationSetter;
