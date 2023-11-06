import { Controller, Get } from '@nestjs/common'
import { LoggerService } from 'src/logger/logger.service'

@Controller('products')
export class ProductsController {
    constructor(private readonly loggerServer: LoggerService) {}

    @Get()
    getAllProduct(): string {
        return 'hello getAllProduct'
    }

    @Get('log')
    log(): number {
        return this.loggerServer.log()
    }
}