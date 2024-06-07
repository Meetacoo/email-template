import { Html, Container, Text, Heading, Tailwind, Section, Row, Column, Link } from '@react-email/components';

const JobRecommendation = () => {
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
          <Text className="mt-[41px] mb-[35px] text-[#222222] text-[20px]">李晓敏，通过您的简历信息，XXX为您推荐了以下职位：</Text>
          <Container
            className="max-w-full bg-[#F0F1FE]"
            style={{
              background: 'linear-gradient( 137deg, #EBE6FF 0%, #F5F8FE 100%)'
            }}
          >
            <Heading as="h3" className="text-center mt-[78px]">
              <Text className="text-[#401A81] text-[40px] opacity-[0.06] leading-0 translate-y-[68px]">Recommended Jobs</Text>
              <Text className="text-[#4912A6] text-[40px] leading-[40px] text-center mb-[72px]">职位推荐</Text>
            </Heading>
            <Container className="max-w-[800px]">
              <Container className="max-w-[740px] mx-[52px] mb-[16px]">
                <Container className="bg-white h-[100px] rounded-[2px] m-0 max-w-[692px]">
                  <Row className="mx-[24px] my-[20px] w-[692px]">
                    <Column>
                      <Link href="https://www.baidu.com" className="font-bold block text-[16px] mt-0 mb-[14px] text-[#222222]">
                        多模态大模型算法工程师
                      </Link>
                      <Section>
                        <Text className="inline-block text-[12px] text-[#666666] rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          某大型上市互联网公司
                        </Text>
                        <Text className="inline-block text-[12px] text-[#666666] rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          上海
                        </Text>
                        <Text className="inline-block text-[12px] text-[#666666]  rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          本科
                        </Text>
                        <Text className="inline-block text-[12px] text-[#666666] rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          3-5年
                        </Text>
                      </Section>
                    </Column>
                    <Column className="w-[150px] text-[16px] text-[#FF7D00] font-bold text-right align-top">30-60K·16薪</Column>
                  </Row>
                </Container>
              </Container>

              <Container className="max-w-[740px] mx-[52px] mb-[16px]">
                <Container className="bg-white h-[100px] rounded-[2px] m-0 max-w-[692px]">
                  <Row className="mx-[24px] my-[20px] w-[692px]">
                    <Column>
                      <Link href="https://www.baidu.com" className="font-bold block text-[16px] mt-0 mb-[14px] text-[#222222]">
                        多模态大模型算法工程师
                      </Link>
                      <Section>
                        <Text className="inline-block text-[12px] text-[#666666] rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          某大型上市互联网公司
                        </Text>
                        <Text className="inline-block text-[12px] text-[#666666] rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          上海
                        </Text>
                        <Text className="inline-block text-[12px] text-[#666666]  rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          本科
                        </Text>
                        <Text className="inline-block text-[12px] text-[#666666] rounded-[4px] leading-[24px] mt-0 mr-[4px] mb-[4px] bg-[#F8F8F8] py-0 px-[8px]">
                          3-5年
                        </Text>
                      </Section>
                    </Column>
                    <Column className="w-[150px] text-[16px] text-[#FF7D00] font-bold text-right align-top">30-60K·16薪</Column>
                  </Row>
                </Container>
              </Container>
            </Container>
            <Section className="h-[71px]" />
          </Container>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default JobRecommendation;
