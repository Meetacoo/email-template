import { Html, Container, Text, Tailwind, Section, Link } from '@react-email/components';

const InvitingEvaluation = ({ name, link }) => {
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
          <Text className="mt-[41px] mb-[16px] text-[#222222] text-[18px]">
            {name}，您好
          </Text>
          <Text className="mt-0 mb-[4px] text-[#222222] text-[16px]">
            我们诚挚地邀请您加入AI智能陪练，您可以通过以下链接开始体验：
          </Text>
          <Link href={link} className="mt-0 font-medium text-[#4F185A]">
            {link}
          </Link>
          <Text className="mt-0 text-[#222222] text-[16px]">
            感谢您的参与，期待您的宝贵反馈。
          </Text>
          <Section className="h-[71px]" />
        </Container>
      </Tailwind>
    </Html>
  );
};

export default InvitingEvaluation;
