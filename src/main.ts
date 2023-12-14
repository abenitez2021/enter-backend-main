import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
//import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ transform: true, validationError: { target: false } }),
  );

  app.enableCors({ origin: true, credentials: true });
  app.setGlobalPrefix('api');

  // const config = new DocumentBuilder()
  //   .setTitle('API')
  //   .setDescription('KOKI')
  //   .setVersion('1.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('docs', app, document);
  await app.listen(AppModule.port);
}
bootstrap();
