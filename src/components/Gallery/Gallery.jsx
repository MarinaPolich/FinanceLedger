import { Image, WrapperImage, WrapperImageItem } from "./Gallery.styled";
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
} from "../../assets/image";

export const Gallery = () => {
  return (
    <WrapperImage>
      <WrapperImageItem>
        <Image>
          <source
            srcset={`${cases1Webp} 1x, ${cases1Webp2x} 2x`}
            type="image/webp"
          />
          <source
            srcset={`${cases1Jpg} 1x, ${cases1Jpg2x} 2x`}
            type="image/jpeg"
          />
          <img src={`${cases1Jpg}`} alt="Cases1" />
        </Image>
      </WrapperImageItem>
      <WrapperImageItem>
        <Image>
          <source
            srcset={`${cases2Webp} 1x, ${cases2Webp2x} 2x`}
            type="image/webp"
          />
          <source
            srcset={`${cases2Jpg} 1x, ${cases2Jpg2x} 2x`}
            type="image/jpeg"
          />
          <img src={`${cases2Jpg}`} alt="Cases2" />
        </Image>
      </WrapperImageItem>
      <WrapperImageItem>
        <Image>
          <source
            srcset={`${cases3Webp} 1x, ${cases3Webp2x} 2x`}
            type="image/webp"
          />
          <source
            srcset={`${cases3Jpg} 1x, ${cases3Jpg2x} 2x`}
            type="image/jpeg"
          />
          <img src={`${cases2Jpg}`} alt="Cases3" />
        </Image>
      </WrapperImageItem>
    </WrapperImage>
  );
};
