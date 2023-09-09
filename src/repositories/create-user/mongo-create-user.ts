import logBookDB from "../../config/dbConnection";
import { CreateUserParams, ICreateUserRepository } from "../../controllers/create-user/protocol";
import { Area } from "../../models/area";

export class MongoCreateUser implements ICreateUserRepository {
    async createUser(params: CreateUserParams): Promise<Area> {
        const {insertedId} = await logBookDB.collection('areas').insertOne(params)
        const area = await logBookDB.collection<Omit<Area, "id">>('areas').findOne({_id: insertedId})
        if(!area){
            throw new Error('Area not Created')
        }
        const {_id, ...rest } = area

        return {id: _id.toHexString(), ...rest}
    }
}