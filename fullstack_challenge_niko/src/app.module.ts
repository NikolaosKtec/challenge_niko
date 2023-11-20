import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'configs/typeorm.config';
import { transaction_fileModule } from './transaction_file/transaction_file.module';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), transaction_fileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
