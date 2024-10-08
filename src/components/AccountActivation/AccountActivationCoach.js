import { Text } from '@react-email/components';
import AccountContainer from './AccountContainer';
import CommonInfoDetail from './CommonInfoDetail';

const AccountActivationCoach = ({ enName, ...props }) => {
  return (
    <AccountContainer>
      <CommonInfoDetail {...props} />
      <Text className="mt-[36px] text-[#222222] text-[16px] leading-[22px]">{enName}，恭喜成为LHH职业生涯教练！</Text>
    </AccountContainer>
  );
};

export default AccountActivationCoach;
