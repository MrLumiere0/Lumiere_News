import Navigation from "../components/navigation";
import Home from "../components/home";
import Footer from "../components/footer";
import Tabs from "../components/tabs";
import HeadlineNews from "@/components/headlinenews";

function HomePage(props) {
  return (
    <div className='App'>
      <div className='home-enter'>
        <div className='side-banner'>
          <Tabs />
        </div>

        <div className='main-banner-homepage'>
          <Navigation />

          <HeadlineNews />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
