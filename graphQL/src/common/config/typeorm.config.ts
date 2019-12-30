import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'rajje.db.elephantsql.com',
    port: 5432,
    username: 'rosuibtk',
    password: 'Nq9zOEj8EhBh6yWJukpBmtJJV_ODM1V0',
    database: 'rosuibtk',
    entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    synchronize: true,
};
