import React from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'

import './Schedule.css'

import { scheduleData } from '../../data/scheduleData'


function Schedule() {

  const lineStyle = {
    width: '4px', 
    borderRadius: 10 
  }

  const bubbleStyle = {
    marginLeft: '8px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    background: '#FFCD00',
    border: 'none',
    cursor: 'auto'
  }

  const timelineStyle = {
    marginBottom: '2rem'
  }
  const contentStyle = {
    margin: '1rem 0',
    fontSize: '0.9rem',
    fontFamily: "'Rubik', sans-serif",
    padding: 10,
    fontWeight: 400,
    boxShadow: '0px 0px 35px 5px rgba(255, 205, 0, 0.3)',
    // border: '2px solid rgba(0, 0, 0, 0.3)'
  }

  const titleStyle = {
    fontSize: '1rem',
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 600,
    color: '#111111'
  }

  const cardHeaderStyle = {
    fontSize: '1rem',
    fontFamily: "'Rubik', sans-serif",
    color: '#111111'
  }

  return (
    <div className='schedule' id="schedule">
      <div className="schedule_container">
        <h1 className="section__title">Schedule</h1>
        <div className="schedule_section">
          <Timeline lineColor="#FFCD00" lineStyle={lineStyle}>
            {scheduleData.map((schedule) => (
              <TimelineEvent 
                key={schedule.id}
                title={schedule.title}
                createdAt={schedule.time}
                bubbleStyle={bubbleStyle}
                style={timelineStyle}
                contentStyle={contentStyle}
                titleStyle={titleStyle}
                cardHeaderStyle={cardHeaderStyle}
              >
                {schedule.description}
              </TimelineEvent>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  )
}

export default Schedule