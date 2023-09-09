import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUserRepository: IGetUsersRepository, private readonly id:string) {}

  async handle() {
    try {
      // Adiciona a chamada para o Repository
      const users = await this.getUserRepository.getOneArea(this.id);
      
      return {
        statusCode: 200, 
        body: users
      }

    } catch (error) {
        return {
            statusCode: 500,
            body: "ERROR"
        }
    }
  }
}
