import { Module, DynamicModule } from '@nestjs/common'
import { PostsController } from './posts.controller'
import { PostsService } from './posts.service'
@Module({})
export class PostsModule {
  static register(): DynamicModule {
    return {
      module: PostsModule,
      providers: [PostsService],
      controllers: [PostsController],
      exports: [PostsService]
    }
  }
}
