import Navigation from "../components/navigation";
import Home from "../components/home";
import Footer from "../components/footer";
import Tabs from "@/components/Tabs.1";

function HomePage(props) {
  return (
    <div className='App'>
      <div className='home-enter'>
        <div className='side-banner'>
          <Tabs />
        </div>

        <div className='main-banner-homepage'>
          <Navigation />
          <Home />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
