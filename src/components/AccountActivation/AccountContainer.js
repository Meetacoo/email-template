import { Html, Container, Text, Heading, Tailwind, Section, Row, Column, Link, Button, Img } from '@react-email/components';
import background from './assets/background.png';
import { render as renderEmail } from '@react-email/render';

const AccountContainer = ({ children }) => {
  return (
    <Html lang="zh-CN">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {}
            }
          }
        }}
      >
        <Container className="max-w-[800px]">
          <Container
            className="max-w-full bg-[#F0F1FE]"
            style={{
              background: 'linear-gradient( 137deg, #EBE6FF 0%, #F5F8FE 100%)'
            }}
          >
            <Img className="max-w-full" src={background} />
            <Container className="max-w-[800px] pl-[38px] pr-[38px]">{children}</Container>
            <Section className="h-[71px]" />
          </Container>
        </Container>
      </Tailwind>
    </Html>
  );
};

export const render = children => {
  return renderEmail(<AccountContainer>$children$</AccountContainer>).replace('$children$', children);
};

export default AccountContainer;
