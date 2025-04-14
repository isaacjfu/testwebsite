import '../App.css';
import {useState,useEffect, useRef} from 'react';
import test_image from '../resources/1993isdera.jpg'
export const timelineData = [
  {
    id: 1,
    title: "Office Inauguration Function",
    description: "Started journey with new location",
    date: "Dec 01 2020", // Keep date format consistent
    image: test_image // Optional
  },
  {
    id: 2,
    title: "Reached New record",
    description: "Life time access members from D&D Business Admission Form in India",
    date: "Sept 16 2020",
  },
  {
    id: 3,
    title: "Design Meetup",
    description: "This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!",
    date: "Sept 12 2020",
  },
    {
    id: 4,
    title: "New People joined with our journey",
    description: "John Smith, Designer",
    date: "Aug 20 2020",
    avatar: "/path/to/avatar.jpg" // Optional avatar
  },
   {
    id: 5,
    title: "Employee photoshoot",
    description: "For website redesign",
    date: "Jul 18 2020",
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
        <span class="day">{day}</span>
        <span class="month-year">{monthYear}</span>
      </div>
      <div class="timeline-content">
        {(side === 'left') ?
         <>              
          {data.image && (
          <div>
            <img src = {data.image}/>
          </div>
          )}    
          <div>
            <h3>{data.title}</h3>
            {data.description && <p>{data.description}</p>}
          </div>
          </> 
          :
          <>        
            <div>
              <h3>{data.title}</h3>
              {data.description && <p>{data.description}</p>}
            </div>
            {data.image && (
              <div>
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
