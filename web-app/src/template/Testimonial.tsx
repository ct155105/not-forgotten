import { RoundedBackground } from '../background/RoundedBackground';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../testimonial/TestimonialCard';

const Testimonial = () => (
  <Section title="Customer's Review" subtitle="Testimonials">
    <RoundedBackground color="bg-gray-100">
      <div className="grid grid-cols-1 gap-y-8 gap-x-12 py-12 px-6 md:grid-cols-3">
        <TestimonialCard
          image="/assets/images/avatar.png"
          imageAlt="Random name avatar alt text"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan rhoncus orci."
          author="Jennifer Ford - Founder"
        />
        <TestimonialCard
          image="/assets/images/avatar2.png"
          imageAlt="Random name avatar alt text 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan rhoncus orci."
          author="Daniel Lawson - Lead developer"
        />
        <TestimonialCard
          image="/assets/images/avatar3.png"
          imageAlt="Random name avatar alt text 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan rhoncus orci."
          author="Michael Craig - Designer"
        />
      </div>
    </RoundedBackground>
  </Section>
);

export { Testimonial };
