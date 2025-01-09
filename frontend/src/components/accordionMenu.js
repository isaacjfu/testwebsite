import React, { useState,useEffect } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    console.log("Toggling index:", index); // Debugging
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "Lorem ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua." },
    { title: "Ut enim ad", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Duis aute", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div className="accordion-item" onClick={() => toggleAccordion(index)} key={index}>
          <span className="accordion-header">
            <h4 className="accordion-title">{section.title}</h4>
            <h4 className="accordion-icon">
              {activeIndex === index ? "_" : "+"}
            </h4>
          </span>
          <div
            className={`accordion-content ${
              activeIndex === index ? "show" : ""
            }`}
          >
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
