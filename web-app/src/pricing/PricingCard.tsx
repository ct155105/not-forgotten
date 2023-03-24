import className from 'classnames';
import type { ReactNode } from 'react';

type IPricingCardProps = {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  button: ReactNode;
  children: ReactNode;
};

const PricingCard = (props: IPricingCardProps) => {
  const pricingCardClass = className(
    'p-8',
    'border',
    'border-gray-300',
    'rounded-md',
    {
      'bg-primary-100': props.popular,
    }
  );

  return (
    <div className={pricingCardClass}>
      <div className="text-center text-2xl font-semibold text-primary-500">
        {props.name}
      </div>

      <div className="mt-2 text-center text-3xl font-bold text-gray-900">
        {props.price}
      </div>

      <div className="mt-4 text-lg font-medium text-gray-700">
        {props.description}
      </div>

      <ul className="mt-4 mb-8">{props.children}</ul>

      {props.button}
    </div>
  );
};

export { PricingCard };
