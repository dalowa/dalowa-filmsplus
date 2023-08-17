import React, { useState } from "react";

import { AiFillPlusCircle } from "react-icons/ai";
import CreateNewUserForm from "@/components/client/CreateNewUserForm";

export default function ButtonCreateNewUserForm() {
  const [isOpenNewUserForm, setIsOpenNewUserForm] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenNewUserForm(true)}
        className="w-24 gap-2 text-green-100 flex flex-col absolute bottom-5 right-5 lg:bottom-10 lg:right-10 2xl:bottom-16 2xl:right-16"
      >
        <div className="w-full bg-teal-600 rounded h-24 relative flex flex-col justify-start py-3 items-center hover:bg-slate-900 transition-colors">
          <AiFillPlusCircle className="text-5xl" />
          <h4 className="w-full absolute bottom-1 text-md text-center">
            Add User
          </h4>
        </div>
      </button>
      {isOpenNewUserForm && (
        <CreateNewUserForm setIsOpenNewUserForm={setIsOpenNewUserForm} />
      )}
    </>
  );
}
