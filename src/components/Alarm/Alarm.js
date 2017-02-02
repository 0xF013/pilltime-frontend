import React from 'react';

export default function Alarm({ alarm }) {
  return (
    <div>Take {alarm.dosage} of {alarm.pillName} at {alarm.ingestionTime}</div>
  );
}