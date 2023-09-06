import { IGetUsersRepository } from "../../controllers/get-Users/protocols";
import { User } from "../../models/user";

export class MongoGetUserRespository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "João",
        lastName: "Almeida",
        email: "email@email",
        password: "senha123",
      },
      {
        firstName: "Impera",
        lastName: "Lanches",
        email: "email@email",
        password: "senha123",
      },
    ];
  }
  async getOneUser(): Promise<User> {
    return {
      firstName: "João",
      lastName: "Almeida",
      email: "email@email",
      password: "senha123",
    };
  }
}

export class MysqlGetUserRespository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "João",
        lastName: "Almeida",
        email: "email@email",
        password: "senha123",
      },
    ];
  }
  async getOneUser(): Promise<User> {
    return {
      firstName: "João",
      lastName: "Almeida",
      email: "email@email",
      password: "senha123",
    };
  }
}
