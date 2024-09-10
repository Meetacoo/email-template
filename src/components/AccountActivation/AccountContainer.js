import { Html, Container, Text, Heading, Tailwind, Section, Row, Column, Link, Button, Img } from '@react-email/components';
import background from './assets/background.png';

const AccountContainer = ({ name, email, loginUrl, role, initPwd, children }) => {
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
            <Container className="max-w-[800px] pl-[38px] pr-[180px]">
              <Text className="mt-[46px] mb-[12px] text-[#000000] text-[20px] font-medium leading-[28px]">
                {name}，您的CRN账号已开通！
              </Text>
              <Text className="m-0 text-[#000000] text-[14px] leading-[20px]">
                登录地址：{loginUrl}
              </Text>
              <Text className="m-0 text-[#000000] text-[14px] leading-[20px]">
                账号：{email}
              </Text>
              <Text className="m-0 text-[#000000] text-[14px] leading-[20px]">
                初始密码：{initPwd }
              </Text>
              {children}
            </Container>
            <Section className="h-[71px]" />
          </Container>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default AccountContainer;
