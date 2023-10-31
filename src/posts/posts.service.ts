import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
    async sayHello(): Promise<string> {
        return 'Hello im posts service 1233'
    }
}
