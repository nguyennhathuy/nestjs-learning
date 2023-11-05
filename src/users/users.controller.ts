import { Controller, Get, Param, ParseIntPipe, UsePipes, ValidationPipe, Post, Body, Inject } from '@nestjs/common'
import { UsersService } from './user.service'
import { PostsService } from 'src/posts/posts.service'
import { UsersDTO } from './users.dto'

@UsePipes(new ValidationPipe({
  transform: true,
  transformOptions: { enableImplicitConversion: true }
}))
@Controller('/users')
export class UsersController {
  constructor(
    @Inject('CLASS_CUSTOM') private readonly classCustom: UsersService,
    private readonly postsService: PostsService
  ) {}

  @Get()
  async sayHello123(): Promise<string> {
    return this.postsService.sayHello()
  }

  @Get(':id')
  async sayHello(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.classCustom.sayHello(id)
  }

  @Post()
  async createUser(@Body() user: UsersDTO): Promise<string> {
    return this.classCustom.createUser(user)
  }
}
 