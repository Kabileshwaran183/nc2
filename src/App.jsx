import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import JsonData from "./components/Constants/Product.json"
import Footer from "./components/Footer"
import { Services } from "./components/Services"
import Hero from "./components/Hero"


function App() {

  return (
    <>
    <div className="kabi">
    <div className="h-[650px] relative">
      <div className="bg-black">
        <img src="assets/natarajan and co mrng.jpg" alt="bg"
          className="absolute right-0 top-0 h-[650px] w-full object-cover opacity-50 z-[-1]"
        /></div>
        <Navbar />
        <Hero />
      </div>
          <About />
          <Product data={JsonData.Products}/>
          <Services data={JsonData.Services} />
          <Contact />
          <Footer/>
    </div>
    
    </>
  )
}

export default App
