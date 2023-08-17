"use client";
import { useRouter } from "next/navigation";

import usersStore, { User } from "@/store/usersStore";
import createUser from "@/utilities/createUser";

import React, { ChangeEvent, useEffect, useState } from "react";
import validateName from "@/utilities/validateName";

export default function HomeForm() {
  const addUser = usersStore((state) => state.addUser);
  const usuarios = usersStore((state) => state.users);
  const router = useRouter();

  const [userName, setUserName] = useState<string>("");
  const [nameIsOkay, setNameIsOkay] = useState<boolean>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoUsuario = createUser(userName, 0, []);

    addUser(nuevoUsuario);
    router.push(`/browse`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameIsOkay(validateName(e.target.value));
    const newValue = e.target.value;
    setUserName(newValue);

    console.log(nameIsOkay);
  };

  useEffect(() => {
    if (usuarios.length > 0) {
      router.push(`/browse`);
    }
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:mb-16 border-blueSky relative border-2 flex rounded group transition-colors hover:border-cyan-300"
      >
        <input
          type="text"
          placeholder="John Doe"
          className="px-2 outline-none bg-blueSkyDarker text-gray-200"
          onChange={handleChange}
          value={userName}
        />
        <button
          className="px-2 py-1 text-md md:text-xl lg:text-2xl bg-blueSky text-blueSkyDarker transition-colors
         hover:bg-cyan-300 cursor-pointer disabled:text-gray-900"
          type="submit"
          disabled={!nameIsOkay}
        >
          Create Local Profile
        </button>
        {!nameIsOkay && typeof nameIsOkay !== "undefined" && (
          <p className="absolute -top-7 px-0 text-red-500 font-bold font-mono rounded-lg">
            Invalidate name
          </p>
        )}
      </form>
    </>
  );
}
