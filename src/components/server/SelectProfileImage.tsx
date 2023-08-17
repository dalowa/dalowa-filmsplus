import Image from "next/image";
import React from "react";

export default function SelectProfileImage({
  setNewImageProfile,
  setIsOpenSelectProfileImage,
}: any) {
  const number = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleClick = (e: number) => {
    setNewImageProfile(e);
    setIsOpenSelectProfileImage(false);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center z-40 bg-blueSkyDarker absolute">
      <h1 className="text-blueSky font-bold text-2xl absolute top-6 lg:top-16 xl:top-20 sm:text-3xl lg:text-4xl xl:text-5xl">{`Select profile image:`}</h1>
      <div className="w-11/12 sm:w-10/12 flex  justify-center flex-wrap gap-5 xl:w-8/12 max-w-4xl px-5">
        {number.map((e) => (
          <Image
            onClick={() => handleClick(e)}
            key={e}
            src={`https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/profilesIcons/${e}.png`}
            alt="Profile image"
            width={200}
            height={0o0}
            className="w-28 sm:w-36 lg:w-44 hover:border-4 cursor-pointer hover:border-blueSky box-border hover:scale-110 transition rounded"
          />
        ))}
      </div>
    </div>
  );
}
