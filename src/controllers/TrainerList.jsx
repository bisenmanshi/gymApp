import React from 'react';
import TrainerCard from './TrainerCard';
import trainer1 from "../img/trainer/trainer-1.jpg"
import trainer2 from "../img/trainer/trainer-2.jpg"
import trainer3 from "../img/trainer/trainer-3.jpg"
const TrainerList = () => {
  const trainers = [
    {
      img: trainer1,
      name: 'Trainer 1',
      details: 'Specialist in weight training and muscle building.'
    },
    {
      img: trainer2,
      name: 'Trainer 2',
      details: 'Expert in cardio and endurance training.'
    },
    {
      img: trainer3,
      name: 'Trainer 3',
      details: 'Yoga and flexibility training specialist.'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {trainers.map((trainer, index) => (
        <TrainerCard key={index} img={trainer.img} name={trainer.name} details={trainer.details} />
      ))}
    </div>
  );
};

export default TrainerList;
