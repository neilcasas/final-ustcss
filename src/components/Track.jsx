import Button from "./Button";

const Track = ({ trackName, trackDescription, trackImage }) => {
  return (
    <div className="flex flex-col items-center max-h-[455px] max-w-[372px] m-5">
      <img className="rounded-[35px]" src={trackImage} alt={trackName} />
      <div className="my-4 mb-7">
        <h5 className="p-[6.5px]">{trackName}</h5>
        <div className="line-clamp-5">
          <p className="b2 text-center">{trackDescription}</p>
        </div>
      </div>
      <Button text={"Learn More"} />
    </div>
  );
};

export default Track;
