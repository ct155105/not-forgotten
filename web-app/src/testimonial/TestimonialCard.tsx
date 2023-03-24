type ITestimonialCardProps = {
  image: string;
  imageAlt: string;
  text: string;
  author: string;
};

const TestimonialCard = (props: ITestimonialCardProps) => (
  <div className="text-center">
    <img
      className="mx-auto h-20 w-20 rounded-full bg-primary-400"
      src={props.image}
      alt={props.imageAlt}
    />

    <div className="mt-4 italic">{props.text}</div>

    <div className="mt-2 font-semibold">{props.author}</div>
  </div>
);

export { TestimonialCard };
