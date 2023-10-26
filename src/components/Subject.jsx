import placeHolder from "../assets/placeholder.png";
import Button from "./Button";

const Subject = (props) => {
  return (
    <div>
      <img src={placeHolder} alt={props.subjectName}></img>
      <h6>{props.subjectName}</h6>
      <Button text="Learn More" />
    </div>
  );
};

export default Subject;
