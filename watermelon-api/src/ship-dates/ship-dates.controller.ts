import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShipDatesService } from './ship-dates.service';
import { CreateShipDateDto } from './dto/create-ship-date.dto';
import { UpdateShipDateDto } from './dto/update-ship-date.dto';
import {ApiTags} from '@nestjs/swagger'

@Controller('ship-dates')
@ApiTags('ship-dates')
export class ShipDatesController {
  constructor(private readonly shipDatesService: ShipDatesService) {}

  @Post()
  create(@Body() createShipDateDto: CreateShipDateDto) {
    return this.shipDatesService.create(createShipDateDto);
  }

  @Get()
  findAll() {
    return this.shipDatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipDatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipDateDto: UpdateShipDateDto) {
    return this.shipDatesService.update(+id, updateShipDateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipDatesService.remove(+id);
  }
}
