import About from "./components/Aboutjs";
import ExploreProj from "./components/ExploreProj";
import Expo2 from "./components/Expo2";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseus";
import './index.css';  // Import the Tailwind CSS
import Divisions  from "./components/Divisions";
import FAQPage from "./components/FAQsPage";
import Blogs from "./components/Blogs";
import GetIT from "./components/GetIT";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <About /> {/* This should only appear once */}
      <ExploreProj />
      <Expo2/>
      <WhyChooseUs/>
      <Divisions/>
      <FAQPage/>
      <Blogs/>
      <GetIT/>
      <Footer/>
    </div>
  );
}

export default App;
