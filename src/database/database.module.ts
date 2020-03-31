import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Data } from '../Data/data.entity'

@Module({
    imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'ec2-18-209-187-54.compute-1.amazonaws.com',
        port: 5432,
        username: 'btgeqtfpfolzoz',
        password: '9a6267b0645aa9e735a792b0822de8ab86b74dbeee6a8e6f00da6726136a3972',
        database: 'd79dc383eqpm7',
        entities: [Data],
        synchronize: true,


    })]
})
export class DatabaseModule {}
