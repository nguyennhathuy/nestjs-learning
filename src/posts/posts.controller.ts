import { Controller, Get } from '@nestjs/common'
import { PostsService } from './posts.service'

@Controller('/posts1')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    
    @Get()
    async sayHello(): Promise<string> {
        return  this.postsService.sayHello()
    }
}