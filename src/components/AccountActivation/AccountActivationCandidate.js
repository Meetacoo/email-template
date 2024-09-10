import {Link, Text} from '@react-email/components';
import AccountContainer from "./AccountContainer";

const AccountActivationCandidate = ({ link, ...props }) => {
  return (
    <AccountContainer {...props}>
      <Text className="mt-[36px] text-[#222222] text-[16px] leading-[22px]">
        欢迎使用LHH FESCO的职业咨询服务，为了保障您的权益和咨询效果，请您详细阅读
        <Link href={link} className="text-[16px] leading-[22px] text-[#165DFF]">
          《LHH服务告知书》
        </Link>
      </Text>
    </AccountContainer>
  );
};

export default AccountActivationCandidate;
