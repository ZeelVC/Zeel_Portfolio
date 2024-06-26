import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ZeelVC" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/zeel-chotaliya-95b940237/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/channel/UC4x4VUyngn6INSy1M2-eBJw" },
    { icon: <FaTwitter />, path: "https://x.com/Zeel_Chotaliya" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon} 
                </Link>
            );
        })}
    </div>
  );
};

export default Socials
