"use client";

import usersStore from "@/store/usersStore";
import Image from "next/image";

import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

import ButtonCreateNewUserForm from "@/components/server/ButtonCreateNewUserForm";
import Link from "next/link";
import UserProfile from "@/components/client/UserProfile";
import { useRouter } from "next/navigation";

export default function ProfilesManage() {
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
    <main className=" min-h-screen text-white flex justify-center items-center">
      <h1 className="text-blueSky font-bold italic text-2xl absolute top-10 lg:top-16 xl:top-20 sm:text-3xl lg:text-4xl xl:text-5xl">{`Manage profiles:`}</h1>
      <div className="w-full flex mx-auto items-center justify-center gap-6 flex-wrap px-3 lg:px-16 xl:px-36 2xl:px-96">
        {usuarios.map((e) => (
          <UserProfile
            key={e.id}
            name={e.name}
            imageProfileIndex={e.imageProfileIndex}
            favorites={e.favorites}
            id={e.id}
            isEdit
          />
        ))}
      </div>
      <Link
        className="bg-teal-600 px-3 py-2 absolute bottom-10 left-5 md:left-10 rounded hover:bg-slate-900 transition-colors sm:text-lg lg:text-xl lg:bottom-16 lg:left-16"
        href={"/profiles"}
      >
        Done
      </Link>
      <ButtonCreateNewUserForm />
    </main>
  );
}
