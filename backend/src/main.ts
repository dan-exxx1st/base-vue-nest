import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { cors: true })
  app.setGlobalPrefix('api')
  await app.listen(3000)
  console.log(`App is listening on port 3000`)
}
bootstrap()
