import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { PricingFeature } from '../pricing/PricingFeature';

const VerticalFeatures = () => (
  <Section
    title="An evening of fun and excitement to benefit cancer research"
    subtitle="Features"
    description="Funds raised will benefit the Stefanie Spielman Fund for Breast Cancer Research - James Cancer Hospital and Solove Research Institute and Hospice of Cincinnati"
  >
    <VerticalFeatureRow
      title="$25 Donation gets you..."
      description={<> 
        <PricingFeature text='Admission'></PricingFeature> 
        <PricingFeature text='Domestic Beer'></PricingFeature>  
        <PricingFeature text='Appetizers and Snacks'></PricingFeature>
        <PricingFeature text='Door Prizes'></PricingFeature>
        <PricingFeature text='Soft Drinks'></PricingFeature>
      </>}
      image="/assets/images/image2.jpg"
      imageAlt="First feature alt text"
    />
    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
  </Section>
);

export { VerticalFeatures };
