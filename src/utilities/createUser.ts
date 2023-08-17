import { User } from '../store/usersStore';
export default function createUser(name:string, imageProfileIndex:number, favorites:[]):User{

    const randomId = `${Math.floor(Math.random() * 999999)}`
    const usuario:User = {name, imageProfileIndex, favorites, id: randomId}
    return usuario

}