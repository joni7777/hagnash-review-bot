import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');

    const options = new DocumentBuilder()
        .setTitle('Hangash Review Bot')
        .setBasePath("api")
        .setDescription('Telgram Bot To Review Hagnash Locations')
        .setVersion('0.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/swagger', app, document);

    await app.listen(process.env.PORT || 3000);
}

bootstrap();
