import {
  person1Jpg,
  person1Jpg2x,
  person1Webp,
  person1Webp2x,
  person2Jpg,
  person2Jpg2x,
  person2Webp,
  person2Webp2x,
  person3Jpg,
  person3Jpg2x,
  person3Webp,
  person3Webp2x,
} from "../../assets/image";
import { SocialList } from "../SocialList/SocialList";
import {
  Photo,
  PhotoText,
  PhotoThumba,
  SocialBox,
  WrapperImage,
  WrapperPhotoItem,
} from "./TeamList.styled";

export const TeamList = () => {
  return (
    <WrapperImage>
      <WrapperPhotoItem>
        <PhotoThumba>
          <Photo>
            <source
              srcset={`${person1Webp} 1x, ${person1Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcset={`${person1Jpg} 1x, ${person1Jpg2x} 2x`}
              type="image/jpeg"
            />
            <img src={`${person1Jpg}`} alt="John Doe" />
          </Photo>
          <SocialBox>
            <SocialList classNameLink={"linkHoverOpacity"} />
          </SocialBox>
        </PhotoThumba>
        <h3>John Doe</h3>
        <PhotoText>President</PhotoText>
      </WrapperPhotoItem>
      <WrapperPhotoItem>
        <PhotoThumba>
          <Photo>
            <source
              srcset={`${person2Webp} 1x, ${person2Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcset={`${person2Jpg} 1x, ${person2Jpg2x} 2x`}
              type="image/jpeg"
            />
            <img src={`${person2Jpg}`} alt="Jane Doe" />
          </Photo>
          <SocialBox>
            <SocialList classNameLink={"linkHoverOpacity"} />
          </SocialBox>
        </PhotoThumba>
        <h3>Jane Doe</h3>
        <PhotoText>Vice President</PhotoText>
      </WrapperPhotoItem>
      <WrapperPhotoItem>
        <PhotoThumba>
          <Photo>
            <source
              srcset={`${person3Webp} 1x, ${person3Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcset={`${person3Jpg} 1x, ${person3Jpg2x} 2x`}
              type="image/jpeg"
            />
            <img src={`${person3Jpg}`} alt="Steve Smith" />
          </Photo>
          <SocialBox>
            <SocialList classNameLink={"linkHoverOpacity"} />
          </SocialBox>
        </PhotoThumba>
        <h3>Steve Smith</h3>
        <PhotoText>Marketing Head</PhotoText>
      </WrapperPhotoItem>
    </WrapperImage>
  );
};
