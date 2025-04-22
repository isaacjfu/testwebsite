import '../App.css';
import {useState,useEffect, useRef} from 'react';

import image_1 from '../resources/history_eratorGTE.jpg'
import image_2 from '../resources/history_cw311_2.jpg'
import image_3 from '../resources/history_spyder.jpg'
import image_4 from '../resources/history_imperator108.jpg'
import image_5 from '../resources/history_commendatore112i.jpg'
import image_6 from '../resources/history_auto.jpg'
import image_7 from '../resources/history_commendatoreGT.jpg'

export const timelineData = [
  {
    id: 1,
    title: "Eberhard designs his first car",
    description: "Eberhard Schulz designs and builds the Erator GTE in his garage, and \
    showcases it to Porsche and Mercedes Benz. Boasting a 5.0L V8 Mercedes-Benz engine \
    the Erator GTE was unrivaled at the time for its top speed of 315 km/h and 0-100km/h \
    of 4 seconds, and its ingenuinty with its iconic gull wing doors.",
    date: "1969", 
    image: image_1 
  },
  {
    id: 2,
    title: "Mercedes-Benz CW311",
    description: "Schulz collaborates with b&b to finish the design on the Mercedes-Benz CW311, \
    one of the few cars that officially wore the Mercedes badge, but was never officially produced by Mercedes. \
    This car was unveiled and showcased at the Frankfurt motor show in 1978, and generated massive amounts \
    of publicity. Like the Erator before, the CW311 boasted the fastest top speed of the time at 319km/h, \
    outperforming the likes of Porsche, Ferrari, and Lamborghini.",
    date: "1978",
    image: image_2
  },
  {
    id: 3,
    title: "Eberhard Schulz founds Isdera",
    description: "Eberhard Schulz parts ways with b&b, and creates Isdera, with the vision of \
    producing exclusive, hand-built sports cars. The first production model of Isdera was the \
    Spyder 033i, which was unveiled at the Geneva Motor show in 1983. Approximately 17 units \
    were produced.",
    date: "1982",
    image: image_3
  },
    {
    id: 4,
    title: "Imperator 108i",
    description: "The second model produced by Isdera, and the spiritual successor of the Mercedes-Benz \
    CW311. Approximately 30 units were produced. Like the CW311 and the Erator GTE, the Imperator 108i \
    featured the gull-wing doors, and utilizied a periscope in place of conventional rear view mirrors. \
    The Imperator 108i borrowed its interior from the Porsche 928, and later editions had pop-up headlights. ",
    date: "1984",
    image: image_4
  },
   {
    id: 5,
    title: "Commendatore 112i",
    description: "The third model produced by Isdera that revolutionized supercars. The Commendatore 112i \
    featured a 6.0L V12 Mercedes-Benz engine that topped out at 340 km/h, and included innovative features \
    such as active suspension and electronically controlled airbrakes. This car was introduced at the 1993 Frankfurt \
    Motor show, and was so popular, that the car was later added to the popular racing game, NFS2, in 1997.",
    date: "1993",
    image: image_5
  },
  {
    id: 6,
    title: "Autobahnkurier 116i",
    description: "For the longest time, Schulz longed to build a sixteen cylinder automobile. That, with the combination \
    of his love for classic 1930s cars, the Isdera Autobahnkurier 116i was born. Drawing inspiration from the Bugatti Royale \
    and the Mercedes Benz 540K Autobahn Kurier, the AutobahnKurier 116i was remarkable fusion of retro design from the 1930s \
    and the mechanical innovation of the modern times. Equipped with dual V8 engines, this coupe boasted a 600 HP engine \
    and a 4.2s 0-100km/h.",
    date: "2006",
    image: image_6
  },
  {
    id: 7,
    title: "Commendatore GT",
    description: "Isdera entered a partnership with WM Motors, to design and produce the Commendatore GT, the spiritual \
    successor of the Commendatore 112i, a car designed almost 25 years ago. The car was unveiled at Auto China 2018.",
    date: "2018",
    image: image_7
  },
  {
    id: 8,
    title: "Acquistion by Xinghiu Automotive Group",
    description: "The Isdera brand was acquired by Xinghiu Automotive Group.",
    date: "2021",
  }
];

const TimelineItem = ({ data, side }) => {
  return (
    <div class={`timeline-item ${side}`}>
      <div class="timeline-marker"></div>
      <div class="timeline-date">
        <span class="month-year">{data.date}</span>
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
