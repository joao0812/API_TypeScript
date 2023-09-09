import { IGetUsersRepository } from "../../controllers/get-Users/protocols";
import { User } from "../../models/user";

import mongoose from "mongoose";

import logBookDB from "../../config/dbConnection";
import { Area } from "../../models/area";

export class MongoGetUserRespository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const area = logBookDB.collection("areas").find();
    return [
      {
        id: "1",
        firstName: "João",
        lastName: "Almeida",
        email: "email@email",
        password: "senha123",
      },
      {
        id: "2",
        firstName: "Impera",
        lastName: "Lanches",
        email: "email@email",
        password: "senha123",
      },
    ];
  }
  async getOneUser(): Promise<User> {
    return {
      id: "3",
      firstName: "João",
      lastName: "Almeida",
      email: "email@email",
      password: "senha123",
    };
  }
  async getArea(): Promise<Area[]> {
    const areas = await logBookDB
      .collection<Omit<Area, "id">>("areas")
      .find()
      .toArray();
    return areas.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }

  async getOneArea(id: string): Promise<Area> {
    const area = await logBookDB
      .collection<Omit<Area, "id">>("areas")
      .findOne({ _id: new mongoose.Types.ObjectId(id) });
    
      if (!area) {
      throw new Error("Area not Created");
    }

    const { _id, ...rest } = area;
    console.log(area);

    return {id: _id.toHexString(), ...rest}
  }
}

/* export class MysqlGetUserRespository implements IGetUsersRepository {
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
} */
