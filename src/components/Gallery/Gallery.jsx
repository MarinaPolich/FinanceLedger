import "lightbox2/dist/js/lightbox-plus-jquery";
import "lightbox2/dist/css/lightbox.css";
import {
  Image,
  LinkImage,
  WrapperImage,
  WrapperImageItem,
} from "./Gallery.styled";
import {
  cases1Jpg,
  cases1Jpg2x,
  cases1Webp,
  cases1Webp2x,
  cases2Jpg,
  cases2Jpg2x,
  cases2Webp,
  cases2Webp2x,
  cases3Jpg,
  cases3Jpg2x,
  cases3Webp,
  cases3Webp2x,
  cases4Jpg,
  cases4Jpg2x,
  cases4Webp,
  cases4Webp2x,
  cases5Jpg,
  cases5Jpg2x,
  cases5Webp,
  cases5Webp2x,
  cases6Jpg,
  cases6Jpg2x,
  cases6Webp,
  cases6Webp2x,
} from "../../assets/image";

const images = [
  {
    alt: "Cases1",
    defaultImg: `${cases1Jpg}`,
    forGallery: `${cases1Jpg2x}`,
    jpg: `${cases1Jpg} 1x, ${cases1Jpg2x} 2x`,
    webp: `${cases1Webp} 1x, ${cases1Webp2x} 2x`,
  },
  {
    alt: "Cases2",
    defaultImg: `${cases2Jpg}`,
    forGallery: `${cases2Jpg2x}`,
    jpg: `${cases2Jpg} 1x, ${cases2Jpg2x} 2x`,
    webp: `${cases2Webp} 1x, ${cases2Webp2x} 2x`,
  },
  {
    alt: "Cases3",
    defaultImg: `${cases3Jpg}`,
    forGallery: `${cases3Jpg2x}`,
    jpg: `${cases3Jpg} 1x, ${cases3Jpg2x} 2x`,
    webp: `${cases3Webp} 1x, ${cases3Webp2x} 2x`,
  },
  {
    alt: "Cases4",
    defaultImg: `${cases4Jpg}`,
    forGallery: `${cases4Jpg2x}`,
    jpg: `${cases4Jpg} 1x, ${cases4Jpg2x} 2x`,
    webp: `${cases4Webp} 1x, ${cases4Webp2x} 2x`,
  },
  {
    alt: "Cases5",
    defaultImg: `${cases5Jpg}`,
    forGallery: `${cases5Jpg2x}`,
    jpg: `${cases5Jpg} 1x, ${cases5Jpg2x} 2x`,
    webp: `${cases5Webp} 1x, ${cases5Webp2x} 2x`,
  },
  {
    alt: "Cases6",
    defaultImg: `${cases6Jpg}`,
    forGallery: `${cases6Jpg2x}`,
    jpg: `${cases6Jpg} 1x, ${cases6Jpg2x} 2x`,
    webp: `${cases6Webp} 1x, ${cases6Webp2x} 2x`,
  },
];

export const Gallery = () => {
  return (
    <WrapperImage>
      {images.map(({ alt, defaultImg, forGallery, jpg, webp }, i) => (
        <WrapperImageItem key={i}>
          <LinkImage href={forGallery} data-lightbox="casses" data-title={alt}>
            <Image>
              <source srcSet={webp} type="image/webp" />
              <source srcSet={jpg} type="image/jpeg" />
              <img src={defaultImg} alt={alt} />
            </Image>
          </LinkImage>
        </WrapperImageItem>
      ))}
    </WrapperImage>
  );
};
