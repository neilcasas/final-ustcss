import Track from "./Track";
import ds from "../assets/datascience.png";
import gd from "../assets/gd.jpeg";
import ccs from "../assets/ccs.png";

const dataScienceDesc =
  "Data Science is the art of deriving meaningful insights from complex and unstructured data. In this track, you will explore data analysis, machine learning, and data visualization to make data-driven decisions and predictions.";

const coreCSDesc =
  "Core Computer Science delves into the fundamental principles of computing. You will learn about algorithms, data structures, programming languages, and computer architecture, providing a strong foundation for various aspects of technology.";
const gameDevDesc =
  "Game Development is an exciting track where you'll create interactive and immersive gaming experiences. You'll work with game engines, graphics, physics, and game design, turning your creative ideas into fully functioning video games.";
const Tracks = () => {
  return (
    <div className="flex flex-col items-center my-6 sm:my-[100px]" id="tracks">
      <h3>Tracks</h3>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:place-content-center sm:gap-[35px]">
        <Track
          trackName={"Data Science"}
          trackDescription={dataScienceDesc}
          trackImage={ds}
        />
        <Track
          trackName={"Core Computer Science"}
          trackDescription={coreCSDesc}
          trackImage={ccs}
        />
        <Track
          trackName={"Game Development"}
          trackDescription={gameDevDesc}
          trackImage={gd}
        />
      </div>
    </div>
  );
};

export default Tracks;
