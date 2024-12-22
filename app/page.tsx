import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slideshow from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/Partners";
import SaveYourSpot from "@/components/SaveYourSpot";
import WhatIsPbeex from "@/components/WhatIsPbeex";
import WhatToExpect from "@/components/WhatToExpect";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <PartnersSection/> */}
      <WhatIsPbeex/>
      <WhatToExpect/>
      <Slideshow/>
      <SaveYourSpot/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
