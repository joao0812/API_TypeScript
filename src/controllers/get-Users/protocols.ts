import { Area } from "../../models/area"
import { User } from "../../models/user"
import { httpResponse } from "../types/protocols"

export interface IGetUsersController {
    handle(): Promise<httpResponse<Area[]>>
}

export interface IGetUsersRepository {
    getUsers(): Promise<User[]>
    getOneUser(): Promise<User>
    getArea(): Promise<Area[]>
}

