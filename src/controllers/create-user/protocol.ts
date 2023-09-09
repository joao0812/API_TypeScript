import { Area } from "../../models/area";
import { User } from "../../models/user";

export interface CreateUserParams {
  area_name: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<Area>;
}
