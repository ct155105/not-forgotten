import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
        {/* <li>
          <Link href="/">Sign in</Link>
        </li>
        <li>
          <Link href="/">
            <Button>Start Free Trial</Button>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-10 pb-14">
      <HeroOneButton
        title={
          <>
            {'Notforgotten Ohio\'s Annual\n'}
            <span className="text-primary-500">Night at the Races</span>
          </>
        }
        description="APR 29, 2023 - 7:30PM - St. Bart's Gymnasium"
        button={
          <Link href="/">
            <Button xl>$20 presale (ends APR 15th), $25 at the door</Button>
            <Button secondary>Must be 21</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
