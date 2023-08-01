import {ApiProperty} from '@nestjs/swagger';

export class CreateShipDateDto {
    @ApiProperty()
    type: string

    @ApiProperty()
    price: number

    @ApiProperty()
    days: number

    @ApiProperty()
    eta: Date
}
