import { Module } from '@nestjs/common';
import { ShipDatesService } from './ship-dates.service';
import { ShipDatesController } from './ship-dates.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ShipDatesController],
  providers: [ShipDatesService],
  imports: [PrismaModule]
})
export class ShipDatesModule {}
