import { Injectable, Scope  } from "@nestjs/common"

@Injectable({
    scope: Scope.REQUEST
})
export class LoggerService {
    
    private count: number = 0
    
    log(): number {
        this.count++
        return this.count
    }
}