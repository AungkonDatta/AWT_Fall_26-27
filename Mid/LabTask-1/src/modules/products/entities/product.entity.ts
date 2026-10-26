import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ length: 100 })
  category!: string;

  @Column({ type: "double precision" })
  price!: number;

  @Column({ type: "int" })
  quantity!: number;
}
