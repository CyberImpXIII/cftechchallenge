import { Get, Post, Controller } from '@nestjs/common';

@Controller('data')
export class DataController {
  @Get()
  async findAll(): Promise<object[]> {
    return [{
        first_name: "jacob",
        last_name: "jacob",
        email_address: "jacob",
        phone_number: "jacob",
        company_name: "jacob",
        effective_date: "jacob",
        status: "jacob",
        primary_al: "jacob",
        primary_gl: "jacob",
        primary_el: "jacob",
        is_deleted: "jacob",
      }];
  }

  @Post()
  async create() {
    return 'Not yet implemented';
  }
}