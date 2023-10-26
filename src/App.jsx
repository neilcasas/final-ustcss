import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Tracks from "./components/Tracks";
import Subjects from "./components/Subjects";
import LatestPosts from "./components/LatestPosts";

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
    </>
  );
}

export default App;
