import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { LoggerService } from 'src/logger/logger.service'

@Module({
    controllers: [ProductsController],
    providers: [LoggerService]
})
export class ProductsModule {}