import { Area } from "../../models/area"
import { User } from "../../models/user"
import { httpResponse } from "../types/protocols"

export interface IGetUsersController {
    handle(): Promise<httpResponse<Area[]>> | Promise<httpResponse<Area>>
}

export interface IGetUsersRepository {
    getUsers(): Promise<User[]>
    getOneUser(): Promise<User>
    getArea(): Promise<Area[]>
    getOneArea(id: string): Promise<Area> | string
}

