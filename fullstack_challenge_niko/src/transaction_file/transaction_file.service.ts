import { customTfRepository } from "./transaction_file.repository";
import { dto_tf } from "./dto_s/dto_tf";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { transaction_file } from "./transaction_file.entity";
import { log } from "console";
import { delay } from "rxjs";
import { SaveOptions, RemoveOptions } from "typeorm";
// import { tfRepository } from "./transaction_file.repository";



@Injectable()
export class transaction_fileService {

    constructor(
        @InjectRepository(transaction_file)
        private readonly repo: typeof customTfRepository,
    ){}

    async getAll() {
        return await this.repo.getTfiles();
      }
      
    /* TODO 
      serve para lista e dados unitários *enviar Json como array,
      falta validar dados de input,
      devido a problemas com o push (so está inserindo último item).
    */
    async saveTf(dto_tf: dto_tf[]): Promise<[transaction_file]> {

        // let tf: transaction_file = this.repo.create();
        // let tf_list: transaction_file[] = [];
        // log(tf)
        // log(dto_tf);
        
        return await this.repo.saveTf(dto_tf);
        // for(let i in dto_tf){
        //   tf_list.push(tf)
         
        //   tf_list[i].transaction_type = dto_tf[i].transaction_type;
        //   tf_list[i].data = dto_tf[i].data;
        //   tf_list[i].description = dto_tf[i].description;
        //   tf_list[i].seller = dto_tf[i].seller;
        //   tf_list[i].value_cents = dto_tf[i].value_cents;
          
        
        // return await this.repo.saveTf(tf_list);
      }

}


