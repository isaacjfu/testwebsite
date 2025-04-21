import '../App.css';
import {useState,useEffect, useRef} from 'react';
import image_1 from '../resources/history_eratorGTE.jpg'
import image_2 from '../resources/history_cw311_2.jpg'
import image_4 from '../resources/history_imperator108.jpg'
import image_5 from '../resources/history_commendatore112i.jpg'
import image_6 from '../resources/history_auto.jpg'
import image_7 from '../resources/history_commendatoreGT.jpg'
export const timelineData = [
  {
    id: 1,
    title: "Erator GTE ",
    description: "Eberhard Schulz designs and builds the Erator GTE in his garage, and showcases it to Porsche and Mercedes Benz",
    date: "Dec 1969", // Keep date format consistent
    image: image_1 // Optional
  },
  {
    id: 2,
    title: "Mercedes-Benz CW311",
    description: "Schulz collaborates with b&b to finish the design on the Mercedes-Benz CW311",
    date: "Sept 1978",
    image: image_2
  },
  {
    id: 3,
    title: "Eberhard Schulz founds Isdera",
    description: "Spyder This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!",
    date: "Sept 1982",
  },
    {
    id: 4,
    title: "Imperator 108i",
    description: "",
    date: "Aug 1984",
    image: image_4
  },
   {
    id: 5,
    title: "Commendatore 112i",
    description: "For website redesign",
    date: "Jul 1993",
    image: image_5
  },
  {
    id: 6,
    title: "Autobahnkurier 116i",
    description: "",
    date: "Sept 2006",
    image: image_6
  },
  {
    id: 7,
    title: "Commendatore GT",
    description: "",
    date: "July 2018",
    image: image_7
  },
  {
    id: 8,
    title: "Acquistion by Xinghiu Automotive Group",
    description: "",
    date: "",
  }
];
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return { day, monthYear };
  } catch (e) {
      const parts = dateString.split(' ');
      if (parts.length >= 3) {
        return { day: parts[1], monthYear: `${parts[0]} ${parts[2]}` };
      }
      return {day: '??', monthYear: '?? ??'}
  }
};
const TimelineItem = ({ data, side }) => {
  const { day, monthYear } = formatDate(data.date);

  return (
    <div class={`timeline-item ${side}`}>
      <div class="timeline-marker"></div>
      <div class="timeline-date">
        <span class="month-year">{monthYear}</span>
      </div>
      <div class="timeline-content">
        {(side === 'left') ?
         <>              
          {data.image && (
          <div class ='timeline-image'>
            <img src = {data.image}/>
          </div>
          )}    
          <div class = 'timeline-description'>
            <h3>{data.title}</h3>
            {data.description && <p>{data.description}</p>}
          </div>
          </> 
          :
          <>        
            <div class = 'timeline-description'>
              <h3>{data.title}</h3>
              {data.description && <p>{data.description}</p>}
            </div>
            {data.image && (
              <div class ='timeline-image'>
                <img src = {data.image}/>
              </div>
            )}
            </>}

      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div class="timeline-container">
      {/* Optional: Add a title like in the image */}
      {/* <h2>Our Company Milestone</h2> */}
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.id}
          data={item}
          // Alternate sides based on index (even = left, odd = right)
          side={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};
const History = ( {} ) => {
  return (   
    <div class = 'about-subcontainer'>
      <div class = 'about-card'>
        <h2> Our History </h2>
        <Timeline/>
      </div>

    </div>

  )

}

export default History
