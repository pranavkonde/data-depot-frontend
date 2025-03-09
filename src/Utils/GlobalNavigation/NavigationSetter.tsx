import { useNavigate } from "react-router-dom";
import Navigator from "./navigationHistory";
import  { FunctionComponent } from 'react'; 



export const NavigationSetter: FunctionComponent = () => {
  Navigator.navigate = useNavigate();
  return null;
};

export default NavigationSetter;
