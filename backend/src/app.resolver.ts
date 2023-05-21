import { Query, Resolver } from '@nestjs/graphql'
import { IQuery } from './graphql'

@Resolver()
export class AppResolver implements IQuery {
  @Query('msg')
  msg() {
    return 'hello'
  }
}
