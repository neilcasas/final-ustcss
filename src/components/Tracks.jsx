import Track from "./Track";

const Tracks = () => {
  return (
    <div className="flex flex-col items-center my-6 sm:my-[100px]" id="tracks">
      <h3>Tracks</h3>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:place-content-center sm:gap-[35px]">
        <Track trackName={"Data Science"} />
        <Track trackName={"Core Science"} />
        <Track trackName={"Game Development"} />
      </div>
    </div>
  );
};

export default Tracks;
