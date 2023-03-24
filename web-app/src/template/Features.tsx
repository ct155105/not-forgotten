import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const Features = () => (
  <Section>
    <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
      <FeatureElement
        title="Reserve a Table (includes admission)
        "
        icon={
          <img src="/assets/images/cancer-ribbon.svg" />
        }
      >
        <ul>
        <li>$240 (8 Reserved Seats)</li>
        <li>$280 (10 Reserved Seats)</li>
        <li>$400 (15 Reserved Seats)</li>
        <li>$500 (20 or more Reserved Seats) </li>
        </ul>
      </FeatureElement>
      <FeatureElement
        title="Sponsor a Horse - $10"
        icon={
          <img src="/assets/images/cancer-ribbon.svg" />
        }
      >
        Name your horse
        If your horse wins its race, you are entered into final race #11.  Win race #11, you win $200.00
      </FeatureElement>
      <FeatureElement
        title="Games!"
        icon={
          <img src="/assets/images/cancer-ribbon.svg" />
        }
      >
        <ul>
          <li>Video Horse Races</li>
          <li>Bid-n-Buy</li>
          <li>Raffel Drawings</li>
          <li>Split the Pot</li>
          <li>Heads/Tails</li>
          <li>Door Prizes</li>
          <li>Wine Toss</li>
          </ul> 
      </FeatureElement>
    </div>
  </Section>
);

export { Features };
