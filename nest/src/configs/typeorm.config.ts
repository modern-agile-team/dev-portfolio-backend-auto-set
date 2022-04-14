import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: '3.37.105.240',
  port: 3306,
  username: 'pf-admin',
  password: 'dev-pf123!',
  database: 'dev-portfolio',
  entities: ['nest/**/*.entity.{js,ts}'],
  synchronize: false,
};
