import { Repository } from 'typeorm';
import { transaction_file } from './transaction_file.entity';
import { dto_tf } from './dto_s/dto_tf';

export interface tfRepository extends Repository<transaction_file>{
    this: Repository<transaction_file>;
  
    getTf(): Promise<transaction_file[]>;
    getTf(id: number): Promise<transaction_file>;
    // saveTf(tf: {transaction_type: string, data: string, description:string, value_cents:number, seller:string });
    // saveTfMany(tf: [{transaction_type: string, data: string, description:string, value_cents:number, seller:string }]);
}

export const customTfRepository: Pick<tfRepository, any> = {

    getTf(this: Repository<transaction_file>, id:string) {
      return this.findOne({ where: { id } });
    },
  
    getTfiles(this: Repository<transaction_file>) {
      return this.find();
    },
  
    saveTf(this: Repository<transaction_file>, tf: [dto_tf]) {
      return this.save(tf);
    },
    // saveTfList(this: Repository<transaction_file>, tf:[dto_tf]) {
    //   return this.save(tf)
    // }
  };