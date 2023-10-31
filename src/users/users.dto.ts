import { IsNotEmpty, IsNumber } from "class-validator"

export class UsersDTO {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    city: string
}