import { Module } from "@nestjs/common"
import { UsersController } from "./users.controller"
import { UsersService } from "./user.service"
import { PostsModule } from "src/posts/posts.module"


@Module({
    imports: [PostsModule.register()],
    controllers: [UsersController],
    providers: [{
        provide: "CLASS_CUSTOM",
        useClass: UsersService
    }]
})

export class UsersModule {}
