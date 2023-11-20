import { Body, Controller, Get, Post } from "@nestjs/common";
import { transaction_fileService } from "./transaction_file.service";

import { transaction_file } from "./transaction_file.entity";
import { dto_tf } from "./dto_s/dto_tf";



@Controller('transaction_file')
export class transaction_fController {

    constructor(private tfService: transaction_fileService) {}

    @Get()
    async findAll(): Promise<transaction_file[]>{

        return this.tfService.getAll();
    }

    @Post()
    async save(@Body() dto_tf:[dto_tf]){
        
        this.tfService.saveTf(dto_tf);
    }
    
    // @Post()
    // async saveMany(@Body() dto_tf:[dto_tf]){
        
    //     this.tfService.saveTfMany(dto_tf);
    // }
}