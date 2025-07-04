import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[400px] lg:h-[620px]">
      <Image
        fill
        alt=""
        src={"/images/hero-image.jpg"}
        className="object-cover object-[70%_100%] -z-10"
      ></Image>
      <div className="max-w-sm lg:max-w-lg pt-14 mx-10 lg:pt-26 lg:mx-24">
        <h1 className="text-2.5xl-semibold lg:text-3xl-semibold">
          Peace, nature, dream
        </h1>
        <p className="text-xl-regular max-w-[80%]">
          Find and book a great experience.
        </p>
      </div>
    </div>
  );
}
