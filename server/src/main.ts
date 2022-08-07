import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const PORT = process.env.port || 5000;

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        const config = new DocumentBuilder()
            .setTitle("Backend lesson")
            .setDescription("This is REST API doc")
            .setVersion("1.0.0")
            .addTag("ZoomLex")
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup("/api/docs", app, document);

        await app.listen(PORT);
    } catch (e) {
        console.error("Something went wrong with server starting: " + e);
    }
}

bootstrap().then(() => {
    console.log("Server was started on: " + PORT);
});
