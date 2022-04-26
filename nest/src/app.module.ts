import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminsModule } from './admins/admins.module';
import { ContactsModule } from './contacts/contacts.module';
import { HeaderBarsModule } from './header-bars/header-bars.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/**/*.entity.{js,ts}`],
      synchronize: false,
    }),
    AdminsModule,
    ContactsModule,
    HeaderBarsModule,
  ],
})
export class AppModule {}
