"use client";

import usersStore from "@/store/usersStore";

import { useEffect, useState } from "react";
import UserProfile from "@/components/client/UserProfile";
import ButtonCreateNewUserForm from "@/components/server/ButtonCreateNewUserForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profiles() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const usuarios = usersStore((state) => state.users);

  useEffect(() => {
    if (usuarios.length == 0) {
      router.push("/");
    }
    setIsMounted(true);
  }, [router, usuarios.length]);

  if (!isMounted) {
    return null;
  }

  return (
    <main className=" min-h-screen text-white flex justify-center items-center flex-col gap-5">
      <h1 className="text-blueSky font-bold italic text-2xl absolute top-10 lg:top-16 xl:top-20 sm:text-3xl lg:text-4xl xl:text-5xl">{`Whos's watching now?`}</h1>
      <div className="w-full flex mx-auto items-center justify-center gap-6 flex-wrap px-3 lg:px-16 xl:px-36 2xl:px-96">
        {usuarios.map((e) => (
          <UserProfile
            key={e.id}
            name={e.name}
            imageProfileIndex={e.imageProfileIndex}
            favorites={e.favorites}
            id={e.id}
          />
        ))}
      </div>
      <Link
        className="bg-teal-600 px-3 py-2 absolute bottom-10 left-5 md:left-10 rounded hover:bg-slate-900 transition-colors sm:text-lg lg:text-xl lg:bottom-16 lg:left-16"
        href={"/profiles/manage"}
      >
        Manage profiles
      </Link>
      <ButtonCreateNewUserForm />
    </main>
  );
}
