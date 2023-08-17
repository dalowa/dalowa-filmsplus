import deleteUser from '@/utilities/deleteUser'
import modifyUser from '@/utilities/modifyUser'
import { create } from 'zustand'
import {persist}  from 'zustand/middleware'
export interface User{
    name: string
    imageProfileIndex: number
    favorites: any[]
    id?: string
}


interface usersStore{
    users: User[];
    selectedUser: string;
    increasePopulation: () =>void
    addUser: (usuario:User) => void
    modifyUser: (id: string, newUserData:User) => void
    deleteUser: (id:string) => void
}


const usersStore = create(persist<usersStore>((set) => ({
  users: [],
  selectedUser: "",
  increasePopulation: () => set((state) => ({ users: state.users })),
  removeAllBears: () => set({ users: [] }),
  addUser: (usuario) => set((state) => ({users: state.users.concat(usuario)})),
  modifyUser:(id, newUserData) => set((state) => ({users: modifyUser(state.users, id, newUserData)})),
  deleteUser: (id) => set((state) => ({users: deleteUser(state.users, id)}))
}),{
  name: "filmsplus-users"
}))

export default usersStore