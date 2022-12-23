import ProtComponent from "./components/ProtComponent"; 
import ProtPageComponent from "./components/ProtPageComponent";

import { useDispatch, useSelector } from "react-redux";
import ProtTitle from "./titles/ProtTitle";

const ProtPage = () => {
   
  return (
    <>
    <ProtTitle/>
     <ProtPageComponent/>
     
    </>
    )

}

  
  export default ProtPage;