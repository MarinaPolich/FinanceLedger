import { SocialList } from "../SocialList/SocialList";
import { FooterBox, Text } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterBox>
      <SocialList classNameLink={"linkHoverColor"} />
      <Text>Copyright &copy; 2021 - FinanceLedger</Text>
    </FooterBox>
  );
};
