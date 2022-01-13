import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion() {
  const [active, setActive] = useState(-1);
  const accordian = [
    {
      title: 'Accordion 1',
      paras: [
        ' hello',
       'hint',
      ],
  
    },
    {
      title: 'Accordion 2',
      paras: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      ],
    },
    {
      title: 'Accordion 3',
      paras: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      ],
    },
  ];

  const handleClick = (index) => {
    if (index === active) setActive(-1);
    else setActive(index);
  };

  return (
    <div>
      <ul className="accordian">
        {accordian.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={index === active ? 'active' : ''}
            >
              <div className="accordian-title">{item.title}</div>
              <div className="accordian-content">
                  <input type="checkbox"/>
                {item.paras.map((para) => {
                  return <p>{para}</p>;
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
