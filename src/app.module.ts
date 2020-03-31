import { Module } from '@nestjs/common';
import { DataController } from './data/data.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [],
  controllers: [DataController],
  providers: [],
})
export class AppModule {}
