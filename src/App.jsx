import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import JsonData from "./components/Constants/Product.json"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Dealership from "./components/Dealarship"
import Awards from "./components/Awards"


function App() {

  return (
    <>
    <div >
    <div className="h-screen relative">
      <div className="bg-black">
        <img src="assets/natarajan and co mrng.jpg" alt="Natarajan and co ultratech buliding solution" title="natarajanandco ultratech buliding solution "
          className="absolute right-0 top-0 h-screen w-full object-cover opacity-50 z-[-1]"
        /></div>
        <Navbar />
        <Hero />
      </div>
          <About />
          <Product data={JsonData.Products}/>
          <Dealership/>
          <Awards/>
          <Contact phone={JsonData.phone} />
          
          <Footer/>
    </div>
    
    </>
  )
}

export default App
