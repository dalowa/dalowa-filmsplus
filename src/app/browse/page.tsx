"use client";

import React, { useState, useEffect } from "react";

import usersStore from "@/store/usersStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Browse() {
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
    <main className="text-white min-h-screen">
      Browse
      <div className="my-10">
        {usuarios.map((e) => (
          <div key={e.name}>
            <h1>{e.name}</h1>
            <Image
              src={`https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/profilesIcons/${e.imageProfileIndex}.png`}
              alt={`Profile image @${e.imageProfileIndex}`}
              width={200}
              height={200}
            ></Image>
          </div>
        ))}
      </div>
      <Link href={"/profiles/manage"} className="bg-red-400 p-2 m-3">
        Manage Profiles
      </Link>
    </main>
  );
}
