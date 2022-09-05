import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcOptions } from './grpc.options';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcOptions);
  app.setGlobalPrefix('api/v1/');
  const config = new DocumentBuilder()
    .setTitle('Gateway APIs')
    .setDescription('All the APIs in our gateway are here.')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('gateway-api', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
