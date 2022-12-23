import { Helmet, HelmetProvider } from "react-helmet-async";

 const BdayTitle = ({ title = "Birthday Party -- Dreeblissa", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default BdayTitle;