import placeholder from "../assets/placeholder.png";
import Button from "./Button";

const trackDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis
metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla
enim urna, accumsan id purus vel, dapibus ultricies ligula.`;

const Track = ({ trackName }) => {
  return (
    <div className="flex flex-col items-center m-5">
      <img className="rounded-[35px]" src={placeholder} alt={trackName} />
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
