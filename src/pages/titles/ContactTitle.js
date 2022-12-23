import { Helmet, HelmetProvider } from "react-helmet-async";

 const ContactTitle = ({ title = "Contact -- Dreeblissa", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default ContactTitle;