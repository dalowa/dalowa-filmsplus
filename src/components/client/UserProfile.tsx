"use client";

import { User } from "@/store/usersStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { BsPen, BsPencil } from "react-icons/bs";
import EditUserForm from "./EditUserForm";

interface Props {
  isEdit?: boolean;
}

export default function UserProfileEdit({
  name,
  id,
  imageProfileIndex,
  isEdit = false,
}: User & Props) {
  const router = useRouter();
  const [onHover, setOnHover] = useState(false);
  const [isOpenEditUserForm, setIsOpenEditUserForm] = useState(false);

  const handleClick = () => {
    if (!isEdit) {
      router.push("/browse");
      return;
    }
    setIsOpenEditUserForm(true);
  };

  return (
    <>
      <div
        className={`flex flex-col gap-2 w-4/12 sm:w-3/12 md:w-2/12 lg:w-2/12 cursor-pointer ${
          onHover ? "text-white" : "text-slate-300 "
        }`}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onClick={handleClick}
      >
        <div
          className={` w-full relative flex justify-center items-center ${
            onHover ? "border-2 border-white" : "border-0"
          }`}
        >
          <Image
            src={`https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/profilesIcons/${imageProfileIndex}.png`}
            alt={name}
            width={200}
            height={0o0}
            className="w-full"
            priority
          />

          {isEdit && (
            <div className="absolute w-full flex items-center justify-center h-full bg-blueSkyDarker50">
              <BsPencil className=" w-full h-14" />
            </div>
          )}
        </div>

        <h4 className="w-full text-center font-sans font-medium text-lg h-16 ">
          {name}
        </h4>
      </div>
      {isOpenEditUserForm && (
        <EditUserForm
          setIsOpenEditUserForm={setIsOpenEditUserForm}
          userId={id}
        />
      )}
    </>
  );
}
