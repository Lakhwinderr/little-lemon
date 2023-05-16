import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function Homepage() {
    return (
      <>
        <Hero></Hero>
        <Specials ></Specials>
        <Testimonials></Testimonials>
        <About id = "about"></About>
        <Footer></Footer>
      </>
    );
  }

  export default Homepage;