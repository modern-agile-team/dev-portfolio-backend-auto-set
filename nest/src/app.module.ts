import { Module } from '@nestjs/common';
import { AdminsModule } from './admins/admins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/../**/*.entity.{js,ts}`],
      synchronize: false,
    }),
    AdminsModule,
  ],
})
export class AppModule {}
