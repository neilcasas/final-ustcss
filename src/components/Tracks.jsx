import Track from "./Track";

const Tracks = () => {
  return (
    <div className="flex flex-col">
      <h3>Tracks</h3>
      <div className="flex place-content-center gap-[35px]">
        <Track trackName={"Data Science"} />
        <Track trackName={"Core Science"} />
        <Track trackName={"Game Development"} />
      </div>
    </div>
  );
};

export default Tracks;
