import placeholder from "../assets/placeholder.png";
import Button from "./Button";

const trackDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis
metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla
enim urna, accumsan id purus vel, dapibus ultricies ligula.`;

const Track = ({ trackName }) => {
  return (
    <div className="flex flex-col items-center w-[372px]">
      <img className="rounded-[35px]" src={placeholder} alt={trackName}></img>
      <div>
        <h5>{trackName}</h5>
        <p className="b2 text-center">{trackDescription}</p>
      </div>
      <Button text={"Learn More"} />
    </div>
  );
};

export default Track;
