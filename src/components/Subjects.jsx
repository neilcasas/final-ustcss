import React, { useState } from "react";
import Button from "./Button";
import Subject from "./Subject";
import subjectsData from "../../subjectsData.json";

const subjectDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut`;

const Subjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Data Science");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="main-container flex flex-col items-center justify-center my-[100px]"
      id="subjects"
    >
      <div className="upper-container text-center mb-20">
        <h3>Subjects</h3>
        <h6 className="w-[524px] mb-6">{subjectDescription}</h6>
        <div className="button-container flex justify-center gap-[15px]">
          <Button
            text="Data Science"
            onClick={() => handleCategoryChange("Data Science")}
          />
          <Button
            text="Core Science"
            onClick={() => handleCategoryChange("Core Science")}
          />
          <Button
            text="Game Development"
            onClick={() => handleCategoryChange("Game Development")}
          />
        </div>
      </div>
      <div className="subjects-container grid sm:grid-cols-3 gap-[40px]">
        {subjectsData[selectedCategory].map((subject, index) => (
          <Subject
            key={index}
            subjectCode={subject.subjectCode}
            subjectName={subject.subjectName}
          />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
