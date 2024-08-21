import React from 'react';
import RowOne from './RowOne';
import RowTwo from './RowTwo';

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="column">
        <RowOne />
        <RowTwo />
      </div>
    </section>
  );
}

export default TopSection;
