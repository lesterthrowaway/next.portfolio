import { useState } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import styles from "./works.module.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "0",
      text: "In Progress..",
      img: "https://www.marketplace.org/wp-content/uploads/2019/08/Fake-twitter.jpg?w=1200",
    },

    {
      id: "1",
      text: "Coming Soon..",
      img: "https://www.desktopbackground.org/download/1920x1080/2011/05/16/204237_grey-gaussian-blur-wallpaper-jpg_1920x1200_h.jpg",
    },
  ];

  const length = data.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    console.log(currentSlide)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length -1 : currentSlide - 1 )
    console.log(currentSlide)
  }

  return (
    <Flex justify="center" m="50px">
      <Image src="assets/arrow2.png" w="50px" h="50px" alt="" onClick={prevSlide}/>
      <Box borderRadius="20px" w="500px" h="500px" bg="black">
        {data.map((d) => (
          <Flex justify="space-between" bg="grey" m="20px" key={d.id}>
            <Image src={d.img} alt={d.text} w="50px" h="50px" />
          </Flex>
        ))}
      </Box>
      <Image src="assets/arrow2.png" alt="" w="50px" h="50px" onClick={nextSlide}/>
    </Flex>
  );
};
export default Works;
