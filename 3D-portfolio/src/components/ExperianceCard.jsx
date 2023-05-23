import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperianceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[90%] h-[90%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-purple-400 text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li key={`exp-point-${index}`}>{point}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperianceCard;
