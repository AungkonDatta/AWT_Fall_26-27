import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  age!: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  yearsOfWorking!: number;
}
