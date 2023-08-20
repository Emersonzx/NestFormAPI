import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD 

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.cn1kdts.mongodb.net/`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
