import Image from "next/image";

const GalleryImg = ({ src, alt }) => {
  return (
    <li className="smOnly:mb-[24px] last:mb-[0]">
      <Image
        src={src}
        alt={alt}
        width={280}
        height={187}
        className="bg-cover"
      />
    </li>
  );
};

export default GalleryImg;
