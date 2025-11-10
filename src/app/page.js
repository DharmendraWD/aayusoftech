import Image from "next/image";
import Hero from "../pages/hero/homepage/Hero.jsx";
import ProcessCard from "@/pages/hero/homepage/process/ProcessCard.jsx";
import Services from "@/pages/hero/homepage/service/Service.jsx"; 
import Portfolio from "@/pages/hero/homepage/portfolio/Portfolio.jsx";
import Price from "@/pages/hero/homepage/price/Price.jsx"
import Benefits from "@/pages/hero/homepage/benefits/Benefits.jsx";
import Testimonial from "../pages/hero/homepage/testimonials/Testimonial.jsx";
import FAQ from "@/pages/hero/homepage/faq/Faq.jsx";
import Contact from "@/pages/hero/homepage/contact/Contact.jsx";
import Footer from "@/components/footers/Footer.jsx";
import Schedule from "@/pages/hero/homepage/schedule/Schedule.jsx";

export default function Home() {
  return (
    <div className="">

<Hero></Hero>


<ProcessCard></ProcessCard>
<Services></Services>
<Portfolio></Portfolio>
<Price></Price>
<Benefits></Benefits>
<Testimonial> </Testimonial>
<Contact></Contact>
<FAQ></FAQ>
<Schedule></Schedule>
<Footer></Footer>




    </div>
  );
}
