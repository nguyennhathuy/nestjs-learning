import { Controller, Get, Param, ParseIntPipe, UsePipes, ValidationPipe, Post, Body } from '@nestjs/common'
import { UsersService } from './user.service'
import { UsersDTO } from './users.dto'

@UsePipes(new ValidationPipe())
@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async sayHello(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.usersService.sayHello(id)
  }

  @Post()
  async sayHelloPost(): Promise<string> {
    return this.usersService.sayHelloPost()
  }

  @Post()
  async createUser(@Body() user: UsersDTO): Promise<string> {
    return this.usersService.createUser(user)
  }
}
