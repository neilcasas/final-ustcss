import placeholder from "../assets/placeholder.png";
import Button from "./Button";

const Subject = (props) => {
  return (
    <div className="main-container bg-neutralltgray w-[413px] h-[473px] rounded-2xl">
      <img
        className="w-[413px] h-[313px] rounded-2xl"
        src={placeholder}
        alt={props.subjectCode}
      ></img>
      <div className="text-container">
        <h6 className="text-primary">{props.subjectCode}</h6>
        <h6>{props.subjectName.toUpperCase()}</h6>
        <Button text="Learn More" />
      </div>
    </div>
  );
};

export default Subject;
