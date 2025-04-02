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
    <div class="accordion">
      {sections.map((section, index) => (
        <div class="accordion-item" onClick={() => toggleAccordion(index)} key={index}>
          <span class="accordion-header">
            <h3 class="accordion-title">{section.title}</h3>
            <h3 class="accordion-icon">
              {activeIndex === index ? "_" : "+"}
            </h3>
          </span>
          <div
            class={`accordion-content ${
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
