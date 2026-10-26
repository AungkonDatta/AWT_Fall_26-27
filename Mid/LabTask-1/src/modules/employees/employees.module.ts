import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "@/modules/employees/entities/employee.entity";
import { EmployeesService } from "@/modules/employees/employees.service";
import { EmployeesController } from "@/modules/employees/employees.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
