import styles from "./footer.module.scss";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Flex justify="center" m={5}>
      <Link
        className={styles.link}
        href="https://github.com/lesterthrowaway"
        target="_blank"
      >
        <Icon as={AiFillGithub} w={7} h={7} />
      </Link>
      <Link
        color="black"
        className={styles.link}
        href="https://www.linkedin.com/home/?originalSubdomain=ca"
        target="_blank"
      >
        <Icon as={TiSocialLinkedin} w={7} h={7} />
      </Link>
      <Link className={styles.link} href="mailto: stefanparenta@gmail.com">
        <Icon as={AiOutlineMail} w={7} h={7} />
      </Link>
    </Flex>
  );
};

export default Footer;
