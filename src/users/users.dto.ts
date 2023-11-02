import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UsersDTO {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @IsString()
    city: string
    
}