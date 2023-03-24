import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl c leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mt-4 mb-10 text-2xl">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
