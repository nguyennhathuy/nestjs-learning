import { Injectable } from "@nestjs/common"
import { UsersDTO } from "./users.dto"

@Injectable()
export class UsersService {
    async sayHello(id: number): Promise<string> {
        return `Hello Users ${id}`
    }
    async sayHelloPost(): Promise<string> {
        return 'say hello post'
    }
    async createUser(user: UsersDTO): Promise<string> {
        return `create success ! ${user.username}`
    }
}