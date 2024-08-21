import React from 'react';
import PromotionImage from "./PromotionImage";
import PromotionContent from "./PromotionContent";

const PromotionSection = () => {
  return (
    <section className="promotion">
      <div className="column">
        <PromotionContent />
        <PromotionImage />
      </div>
    </section>
  );
}

export default PromotionSection;
