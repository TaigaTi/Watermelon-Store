import { Injectable } from '@nestjs/common';
import { CreateShipDateDto } from './dto/create-ship-date.dto';
import { UpdateShipDateDto } from './dto/update-ship-date.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShipDatesService {
  constructor(private prisma: PrismaService) {}

  create(createShipDateDto: CreateShipDateDto) {
    return this.prisma.shipping.create({data: createShipDateDto});
  }

  findAll() {
    return this.prisma.shipping.findMany();
  }

  findOne(id: number) {
    return this.prisma.shipping.findUnique({where: {id}});
  }

  update(id: number, updateShipDateDto: UpdateShipDateDto) {
    return this.prisma.shipping.update({where:{id}, data: updateShipDateDto});
  }

  remove(id: number) {
    return this.prisma.shipping.delete({where:{id}});
  }
}
