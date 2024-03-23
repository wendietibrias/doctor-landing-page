import { 
  Hero, 
  Service,
  About, 
  Download, 
  Testimonial,
  Article,
  Footer 
} from "./sections"

const App = () => {
  return (
    <>
      <main className="main-container">
        <Hero/>
        <Service/>
        <About/>
        <Download/>
        <Testimonial/>
        <Article/>
        <Footer/>
      </main>
    </>
  )
}

export default App
