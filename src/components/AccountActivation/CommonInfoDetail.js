import { Text } from '@react-email/components';

const CommonInfoDetail = ({ name, loginUrl, email, initPwd }) => {
  return (
    <>
      <Text className="mt-[46px] mb-[12px] text-[#000000] text-[20px] font-medium leading-[28px]">{name}，您的CRN账号已开通！</Text>
      <Text className="m-0 text-[#000000] text-[14px] leading-[20px]">登录地址：{loginUrl}</Text>
      <Text className="m-0 text-[#000000] text-[14px] leading-[20px]">账号：{email}</Text>
      <Text className="m-0 text-[#000000] text-[14px] leading-[20px]">初始密码：{initPwd}</Text>
    </>
  );
};

export default CommonInfoDetail;
