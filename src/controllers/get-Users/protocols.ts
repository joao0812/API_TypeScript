import { User } from "../../models/user"
import { httpResponse } from "../types/protocols"

export interface IGetUsersController {
    handle(): Promise<httpResponse<User[]>>
}

export interface IGetUsersRepository {
    getUsers(): Promise<User[]>
    getOneUser(): Promise<User>
}

