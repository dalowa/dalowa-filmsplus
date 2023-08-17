import { User } from "@/store/usersStore"

const deleteUser = (listOfUsers:User[],id:string) => {
    return listOfUsers.filter(e => e.id !== id)
}

export default deleteUser