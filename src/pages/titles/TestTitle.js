import { Helmet, HelmetProvider } from "react-helmet-async";

 const TestTitle = ({ title = "Testimonials -- Dreeblissa", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default TestTitle;