import { Helmet, HelmetProvider } from "react-helmet-async";

 const TipsTitle = ({ title = "Tips and Ideas -- Dreeblissa", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default TipsTitle;