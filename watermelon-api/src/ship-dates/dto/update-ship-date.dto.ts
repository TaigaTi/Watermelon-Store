import { PartialType } from '@nestjs/swagger';
import { CreateShipDateDto } from './create-ship-date.dto';

export class UpdateShipDateDto extends PartialType(CreateShipDateDto) {}
