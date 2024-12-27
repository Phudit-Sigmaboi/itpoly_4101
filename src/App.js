// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Home from './pages/Home';

// function App() {
//   return (
//     <div className="App">
//       <section> <Navbar /> </section>
//       <section> <Header /> </section>
//       <section> <Home /> </section>
//       <section>
//         <iframe src="https://www.lannapoly.ac.th/web/#/personal/" title="Lanna Poly" className="h-screen w-screen" style={{ border: 'none' }}></iframe>
//       </section>
//       <section> <Footer /> </section>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "courses":
        return <Courses />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Navbar setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;

