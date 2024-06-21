import MenuItem from "@/components/menu/MenuItem";
import Hero from "../components/layout/Hero"
import Navbar from "../components/layout/Navbar"
import HomeMenu from "@/components/layout/Homemenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
   <div>
    
    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16">
    <SectionHeaders
    subHeader={'Our story'}
    mainHeader={'About us'}/>
    <div className="text-gray-500">
    <p className="max-w-2xl mx-auto mt-4">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, perspiciatis praesentium corrupti commodi aperiam fugiat laboriosam reiciendis ab quia laudantium earum cum rem consequuntur exercitationem asperiores obcaecati assumenda, fuga veniam.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus, facere sunt, modi est alias impedit nostrum, cum ipsa necessitatibus consequuntur? Esse fugiat veritatis soluta, explicabo a ab aut aliquid.
    </p>
    </div>
    </section>
    <section className="text-center">
     <SectionHeaders
     subHeader={'Dont hesitate'}
     mainHeader={'Contact us'}
     />
     <div className="mt-8 p-3">
      <a className="text-4xl mt-8" href="tel:+112234455">
     +1 2934795834
      </a>
     </div>
    </section>
    
   </div>
  );
}
