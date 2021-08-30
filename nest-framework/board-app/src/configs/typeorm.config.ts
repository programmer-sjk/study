import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ant-man-rds-dev-cluster.cluster-cyhy1ftsjccr.ap-northeast-2.rds.amazonaws.com',
  port: 5432,
  username: 'inflab',
  password: 'inf#$lab!%',
  database: 'ant1',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
