"use client";

import usersStore, { User } from "@/store/usersStore";
import React, { ChangeEvent, useEffect, useState } from "react";

import createUser from "@/utilities/createUser";
import Image from "next/image";
import validateName from "@/utilities/validateName";
import { BsPencil } from "react-icons/bs";
import SelectProfileImage from "../server/SelectProfileImage";

export default function EditUserForm({ setIsOpenEditUserForm, userId }: any) {
  const modifyUser = usersStore((state) => state.modifyUser);
  const listOfUsers = usersStore((state) => state.users);
  const user = usersStore((state) => state.users).filter((e) => e.id == userId);
  const deleteUser = usersStore((state) => state.deleteUser);

  const [newUserName, setNewUserName] = useState(user[0].name);
  const [moreThanOneUser, setMoreThanOneUser] = useState();
  const [isOpenSelectProfileImage, setIsOpenSelectProfileImage] =
    useState(false);
  const [nameIsOkay, setNameIsOkay] = useState<boolean>(
    validateName(newUserName)
  );
  const [newImageProfile, setNewImageProfile] = useState(
    user[0].imageProfileIndex
  );

  const handleWrittingName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNameIsOkay(validateName(e.target.value));
    setNewUserName(e.target.value);
  };

  const handleClickImage = () => {
    setIsOpenSelectProfileImage(true);
  };

  const handleSubmit = () => {
    const nuevoUsuario: User = createUser(newUserName, newImageProfile, []);

    modifyUser(userId, nuevoUsuario);
    setIsOpenEditUserForm(false);
  };

  const handleDeleteUser = () => {
    deleteUser(userId);
    setIsOpenEditUserForm(false);
  };

  return (
    <>
      <div className="w-screen h-screen bg-blueSkyDarker absolute flex justify-center items-center z-30">
        <form
          onSubmit={handleSubmit}
          className="h-64 w-11/12 flex flex-col items-center justify-center gap-5 text-blueSky font-semibold font-sans"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl">Update Profile</h1>

          <div
            className={`w-32 sm:w-44 lg:w-52 relative flex justify-center items-center border-blueSky border cursor-pointer`}
            onClick={handleClickImage}
          >
            <Image
              src={`https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/profilesIcons/${newImageProfile}.png`}
              alt={user[0].name}
              width={200}
              height={0o0}
              className="w-full"
              priority
            />

            <div className="absolute w-full flex items-center justify-center h-full bg-blueSkyDarker50">
              <BsPencil className="w-full h-10" />
            </div>
          </div>
          <label className="flex flex-col gap-2 relative">
            <p className="sm:text-xl lg:text-2xl lg:py-4">New Profile name: </p>
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
          <div className="flex gap-5 w-full justify-center m-10 flex-col items-center">
            <button
              type="submit"
              className="text-center w-32 sm:w-36 lg:w-48 text-base py-2 px-2  rounded text-gray-200 bg-emerald-500 sm:text-xl lg:text-2xl lg:py-2
             hover:text-lime-200 hover:-translate-y-1 disabled:bg-gray-500 disabled:hover:text-gray-200 transition-all disabled:hover:translate-y-0"
              disabled={!nameIsOkay}
            >
              Save
            </button>
            <button
              type="button"
              className="text-center w-32 sm:w-36 lg:w-48 text-base py-2 px-2 rounded text-gray-200 bg-emerald-800 sm:text-xl lg:text-2xl lg:py-2
             hover:text-lime-200 hover:-translate-y-1 disabled:hover:translate-y-0 disabled:bg-gray-500 disabled:hover:text-gray-200 "
              onClick={handleDeleteUser}
              disabled={listOfUsers.length === 1}
            >
              Delete Profile
            </button>
            <button
              type="button"
              className="text-center w-32 sm:w-36 lg:w-48 text-base py-2 px-2 rounded text-gray-200 bg-emerald-800 sm:text-xl lg:text-2xl lg:py-2
             hover:text-lime-200 hover:-translate-y-1 "
              onClick={() => setIsOpenEditUserForm(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
      {isOpenSelectProfileImage && (
        <SelectProfileImage
          setNewImageProfile={setNewImageProfile}
          setIsOpenSelectProfileImage={setIsOpenSelectProfileImage}
        />
      )}
    </>
  );
}
