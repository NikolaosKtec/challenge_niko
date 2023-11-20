import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,CreateDateColumn,UpdateDateColumn,  } from 'typeorm';

export type enum_transaction_type = "Venda_produtor+"| "Venda_afiliado+"|"Comissão_paga-"|"Comissão_recebida+";

  @Entity()
  export class transaction_file extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    // @Column({ 
    //     nullable: false, type: 'enum', enum:[ "Venda_produtor+",
    //      "Venda_afiliado+",
    //     "Comissão_paga-",
    //     "Comissão_recebida+"],
    //     default: "Venda_afiliado+" })
    //     transaction_type: enum_transaction_type;
    @Column({ nullable: false, type: 'varchar', length:24 })
    transaction_type: string
    
    @Column({ nullable: false, type: 'timestamp' })
    data: string;
  
    @Column({ nullable: false, type: 'varchar', length: 31 })
    description: string;
  
    @Column({ nullable: false, type:'integer' })
    value_cents: number;
  
    @Column({ nullable: false,type:'varchar',length:30 })
    seller: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }