import { customTfRepository } from './transaction_file.repository';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { transaction_file } from './transaction_file.entity';
import { transaction_fileService } from './transaction_file.service';
import { transaction_fController } from './transaction_f.controller';




@Module({
    controllers:[transaction_fController],
    imports:[TypeOrmModule.forFeature([transaction_file])],
    providers:[
        {
            provide: getRepositoryToken(transaction_file),
            inject: [getDataSourceToken()],
            useFactory(datasource: DataSource) {
                return datasource.getRepository(transaction_file).extend(customTfRepository);
            },
        },
        transaction_fileService,
    ],
})
export class transaction_fileModule {}
