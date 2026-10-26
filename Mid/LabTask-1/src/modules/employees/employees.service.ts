import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "@/modules/employees/entities/employee.entity";
import { CreateEmployeeDto } from "@/modules/employees/dto/create-employee.dto";
import { UpdateEmployeeDto } from "@/modules/employees/dto/update-employee.dto";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly repo: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeDto) {
    try {
      return await this.repo.save(this.repo.create(dto));
    } catch (e) {
      this.handleDuplicateEmail(e);
      throw e;
    }
  }

  findAll() {
    return this.repo.find({ order: { id: "ASC" } });
  }

  async findOne(id: number) {
    const employee = await this.repo.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.findOne(id);
    Object.assign(employee, dto);
    try {
      return await this.repo.save(employee);
    } catch (e) {
      this.handleDuplicateEmail(e);
      throw e;
    }
  }

  async remove(id: number) {
    const employee = await this.findOne(id);
    await this.repo.remove(employee);
    return { message: `Employee with id ${id} deleted successfully` };
  }

  // PostgreSQL unique violation code is 23505
  private handleDuplicateEmail(e: unknown) {
    if ((e as { code?: string }).code === "23505") {
      throw new ConflictException("An employee with this email already exists");
    }
  }
}
