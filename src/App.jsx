import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Tracks from "./components/Tracks";
import Subjects from "./components/Subjects";
import LatestPosts from "./components/LatestPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <Tracks />
      <Divider />
      <Subjects />
      <Divider />
      <LatestPosts />
      <Footer />
    </>
  );
}

export default App;
