import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ShipDatesModule } from './ship-dates/ship-dates.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, ShipDatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
