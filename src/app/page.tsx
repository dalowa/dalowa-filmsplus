import HomeForm from "@/components/client/HomeForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-netflix w-screen min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="w-screen min-h-screen bg-blueSkyDarker50 flex flex-col items-center justify-center gap-5 lg:justify-center lg:items-center lg:flex-row">
        <h1 className="text-blueSky font-bold text-6xl md:text-6xl lg:text-6xl font-sans absolute top-7 md:left-5">
          FILMS+
        </h1>
        <div className="w-full flex justify-center items-center relative lg:w-5/12 mt-10">
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            className="absolute top-10 z-10 w-7/12 md:w-5/12 lg:w-9/12 overflow-hidden lg:top-7 lg:px-10 xl:px-12 2xl:px-16 2xl:top-12 xl:top-10"
            autoPlay
            muted
            loop
            preload="auto"
          />
          <Image
            src={
              "https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/screens.png"
            }
            alt="Screen"
            width={900}
            height={0o0}
            className="w-11/12 md:w-8/12 lg:w-11/12 z-20"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-10 md:gap-10 lg:w-6/12">
          <p className="text-blue-100 text-lg font-serif w-4/5 text-center md:text-2xl md:w-3/5 lg:text-3xl lg:w-10/12">
            Welcome to Films+! Where every screen is a gateway to the thrilling
            world of movies and series. Create a new Profile now and unlock a
            universe of limitless entertainment. Explore, enjoy, and share your
            favorites!
          </p>
          <HomeForm />
        </div>
        <p className="absolute bottom-0 text-gray-300 py-2 bg-blueSkyDarker w-full text-center">
          Designed and developed by David Urbano
        </p>
      </div>
    </main>
  );
}
