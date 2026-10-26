import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ length: 150, unique: true })
  email!: string;

  @Column({ length: 30 })
  phone!: string;

  // Dummy password for this lab task (stored as plain text on purpose)
  @Column({ length: 100 })
  password!: string;

  @Column({ type: "int" })
  age!: number;

  @Column({ name: "years_of_working", type: "int" })
  yearsOfWorking!: number;
}
