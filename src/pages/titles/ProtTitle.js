import { Helmet, HelmetProvider } from "react-helmet-async";

 const ProtTitle = ({ title = "Portfolio -- Dreeblissa", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default ProtTitle;