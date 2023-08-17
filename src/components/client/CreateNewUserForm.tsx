"use client";

import usersStore, { User } from "@/store/usersStore";
import React, { ChangeEvent, useState } from "react";
import modifyUser from "@/utilities/modifyUser";
import createUser from "@/utilities/createUser";
import Image from "next/image";
import validateName from "@/utilities/validateName";

export default function CreateNewUserForm({ setIsOpenNewUserForm }: any) {
  const [newUserName, setNewUserName] = useState("");
  const addUser = usersStore((state) => state.addUser);
  const [nameIsOkay, setNameIsOkay] = useState<boolean>();

  const handleWrittingName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNameIsOkay(validateName(e.target.value));
    setNewUserName(e.target.value);
    console.log(nameIsOkay);
  };

  const handleSubmit = () => {
    const nuevoUsuario: User = createUser(newUserName, 0, []);

    addUser(nuevoUsuario);
    setIsOpenNewUserForm(false);
  };

  return (
    <div className="w-screen h-screen bg-blueSkyDarker absolute flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="h-64 w-11/12 flex flex-col items-center justify-center gap-5 text-blueSky font-semibold font-sans"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-5xl">Add Profile</h1>
        <Image
          src={
            "https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/profilesIcons/0.png"
          }
          alt="Profile image"
          width={200}
          height={0o0}
          className="w-32 sm:w-44 lg:w-52"
        />
        <label className="flex flex-col gap-2 relative">
          <p className="sm:text-xl lg:text-2xl lg:py-4">Profile name: </p>
          <input
            type="text"
            value={newUserName}
            onChange={handleWrittingName}
            className="outline-none rounded border border-blueSky bg-blueSkyDarker px-2 py-1 sm:px-3 sm:py-2 sm:text-xl lg:text-2xl lg:px-4 lg:py-3"
          />
          {!nameIsOkay && typeof nameIsOkay !== "undefined" && (
            <p className="absolute -bottom-7 text-red-500 font-bold  rounded-lg">
              Invalidate name
            </p>
          )}
        </label>
        <div className="flex gap-10 w-full justify-center m-10">
          <button
            type="submit"
            className="text-center w-24 sm:w-28 p-1 rounded text-gray-200 bg-emerald-500 sm:text-xl lg:text-2xl lg:w-36 lg:py-2 hover:text-lime-200 hover:-translate-y-1 disabled:bg-gray-500 disabled:hover:text-gray-200 transition-all"
            disabled={!nameIsOkay}
          >
            Continue
          </button>
          <button
            type="button"
            className="text-center w-24 sm:w-28 p-1 rounded text-gray-200 bg-emerald-800 sm:text-xl lg:text-2xl lg:w-36 lg:py-2 hover:text-lime-200 hover:-translate-y-1 "
            onClick={() => setIsOpenNewUserForm(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

/* import usersStore, { User } from "@/store/usersStore";
import React, { ChangeEvent, useState } from "react";

export default function CreateNewUserForm({ setIsOpenNewUserForm }: any) {
  const [newUserName, setNewUserName] = useState("");
  const modifyUser = usersStore((state) => state.modifyUser);
  const handleWrittingName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewUserName(e.target.value);
  };

  const handleSubmit = () => {
    const nuevoUsuario: User = {
      name: newUserName,
      imageProfileIndex: 0,
      favorites: [],
    };

    modifyUser("144817", nuevoUsuario);
    setIsOpenNewUserForm(false);
  };

  return (
    <div className="w-screen h-screen bg-gray-700 absolute">
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          value={newUserName}
          onChange={handleWrittingName}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
 */
