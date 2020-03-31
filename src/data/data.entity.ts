import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email_address: string;

    @Column()
    phone_number: string;

    @Column()
    company_name: string;

    @Column()
    effective_date: Date;

    @Column()
    status: string;

    @Column()
    primary_al: boolean;

    @Column()
    primary_gl: boolean;

    @Column()
    primary_el: boolean;

    @Column()
    is_deleted: boolean;
}