import { User } from "@/store/usersStore"

function modifyUser(listUsers:User[], id:string, modifiedUser:{name: string, imageProfileIndex: number}){
  
  
    return listUsers.map(e => {
      const nuevoUsuarioInfo:User = {...modifiedUser, id: e.id, favorites: e.favorites} 
      if(e.id==id){
        return nuevoUsuarioInfo
      }else {
        return e
      }
    })
  }

export default modifyUser