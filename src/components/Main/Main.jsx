import {
  AboutTitle,
  MainBox,
  Image,
  Thumba,
  Title,
  Wrapper,
  Text,
} from "./Main.styled";
import {
  blog2xJpg,
  blog2xWebp,
  blogJpg,
  blogWebp,
  contact2xJpg,
  contact2xWebp,
  contactJpg,
  contactWebp,
  people2xJpg,
  people2xWebp,
  peopleJpg,
  peopleWebp,
} from "../../assets/image";
import { Hero } from "../Hero/Hero";
import { ContainerWithImage } from "../ContainerWithImage/ContainerWithImage";
import { Container } from "../Container/Container";
import { ButtonOutline } from "../Button/Button";
import { Gallery } from "../Gallery/Gallery";
import { TeamList } from "../TeamList/TeamList";
import { Element } from "react-scroll";
import { FormContact } from "../FormContact/FormContact";

export const Main = () => {
  return (
    <MainBox>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <ContainerWithImage>
          <Thumba>
            <Image>
              <source
                srcSet={`${peopleWebp} 1x, ${people2xWebp} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${peopleJpg} 1x, ${people2xJpg} 2x`}
                type="image/jpeg"
              />
              <img src={`${peopleJpg}`} alt="People" />
            </Image>
          </Thumba>
          <Wrapper>
            <AboutTitle>What you are looking for</AboutTitle>
            <Title>We provide bespoke solutions</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <ButtonOutline type="button" color={"var(--primary)"}>
              read more
            </ButtonOutline>
          </Wrapper>
        </ContainerWithImage>
      </Element>
      <Element name="cases">
        <Container>
          <AboutTitle>This is what we do</AboutTitle>
          <Title>Business Cases</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
          <Gallery />
        </Container>
      </Element>
      <Element name="blog">
        <ContainerWithImage direction={"row-reverse"}>
          <Thumba>
            <Image>
              <source
                srcSet={`${blogWebp} 1x, ${blog2xWebp} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${blogJpg} 1x, ${blog2xJpg} 2x`}
                type="image/jpeg"
              />
              <img src={`${blogJpg}`} alt="Blog" />
            </Image>
          </Thumba>
          <Wrapper color={"var(--second-color)"}>
            <AboutTitle>April 16 2020</AboutTitle>
            <Title>Blog post one</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <ButtonOutline type="button" color={"var(--second-color)"}>
              read our blog
            </ButtonOutline>
          </Wrapper>
        </ContainerWithImage>
      </Element>
      <Container>
        <AboutTitle>Who we are</AboutTitle>
        <Title>Our Professional Team</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
        <TeamList />
      </Container>
      <Element name="contact">
        <ContainerWithImage>
          <Thumba>
            <Image>
              <source
                srcSet={`${contactWebp} 1x, ${contact2xWebp} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${contactJpg} 1x, ${contact2xJpg} 2x`}
                type="image/jpeg"
              />
              <img src={`${contactJpg}`} alt="Contact" />
            </Image>
          </Thumba>
          <Wrapper color={"var(--bg-form)"}>
            <FormContact />
          </Wrapper>
        </ContainerWithImage>
      </Element>
    </MainBox>
  );
};
