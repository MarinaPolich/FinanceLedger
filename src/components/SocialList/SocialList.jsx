import { facebook, linkedin, twitter, youtube } from "../../assets/icon";
import { IconItem, IconLink, WrapperIcon } from "./SocialList.styled";
import { ReactSVG } from "react-svg";

const icons = [
  { title: "Facebook", icon: facebook, href: "https://www.facebook.com/" },
  { title: "Twitter", icon: twitter, href: "https://twitter.com/" },
  { title: "Youtube", icon: youtube, href: "https://www.youtube.com/" },
  { title: "Linkedin", icon: linkedin, href: "https://www.linkedin.com/" },
];

export const SocialList = ({ classNameLink }) => {
  return (
    <WrapperIcon>
      {icons.map(({ icon, title, href }) => (
        <IconItem key={title}>
          <IconLink href={href} className={classNameLink} title={title}>
            <ReactSVG
              src={icon}
              afterInjection={(svg) => svg.setAttribute("height", "35")}
              className="social-icon"
              wrapper="div"
            />
          </IconLink>
        </IconItem>
      ))}
    </WrapperIcon>
  );
};
