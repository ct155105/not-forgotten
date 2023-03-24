import type { ReactNode } from 'react';

type IFeatureElementProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

const FeatureElement = (props: IFeatureElementProps) => (
  <div className="feature-element text-center">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-400">
      {props.icon}
    </div>

    <div className="mt-4 text-2xl font-semibold text-gray-900">
      {props.title}
    </div>
    <div className="mt-2 text-lg leading-7">{props.children}</div>

    <style jsx>
      {`
        .feature-element :global(svg) {
          @apply text-white stroke-current w-6 h-6 stroke-2;
        }
      `}
    </style>
  </div>
);

export { FeatureElement };
