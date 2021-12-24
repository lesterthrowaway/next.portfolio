import styles from "./aboutme.module.scss";
import { Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <Fragment>
      <Flex justify="center" className={styles.container}>
        <div className={styles.left}>
          <h1>Hello &#128075;, I'm Stefan.</h1>
          <p>
            <Typewriter
              options={{
                loop: true,
              }}
              className={styles.typewriter}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer.")
                  .pauseFor(1000)
                  .deleteChars(10)
                  .pauseFor(600)
                  .typeString("Designer.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(600)
                  .typeString("Student.")
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(600)
                  .start();
              }}
            />
          </p>
        </div>
        <div className={styles.right}>
          <p>
            I am a Junior front-end developer and designer from Hamilton,
            Ontario. I am currently in school for Software Development at Mohawk
            College. I am proficient in{" "}
            <b>HTML5, CSS3, JavaScript, Next.js,</b> and <b>React.</b>
          </p>
          <p>
            I have taught myself all of the above-mentioned languages and I am
            looking to apply my skills to the real world.
          </p>
        </div>
      </Flex>
      <hr></hr>
    </Fragment>
  );
};

export default AboutMe;
