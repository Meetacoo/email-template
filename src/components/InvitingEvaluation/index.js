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
            Hi，{name}
          </Text>
          <Text className="mt-0 mb-[4px] text-[#222222] text-[16px]">
            诚邀您参加智能测评。
          </Text>
          <Text className="mt-0 mb-[4px] text-[16px]">
            <Text className="font-bold m-0 inline-block">智能测评链接如下</Text>
            <Link href={link} className="mt-0 ml-[8px] font-medium text-[#4F185A]">
              {link}
            </Link>
          </Text>
          <Text className="mt-0 text-[#222222] text-[16px]">
            如点击链接未响应，可复制链接至浏览器中打开。
          </Text>
          <Section className="h-[71px]" />
        </Container>
      </Tailwind>
    </Html>
  );
};

export default InvitingEvaluation;
