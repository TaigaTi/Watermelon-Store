import { Test, TestingModule } from '@nestjs/testing';
import { ShipDatesController } from './ship-dates.controller';
import { ShipDatesService } from './ship-dates.service';

describe('ShipDatesController', () => {
  let controller: ShipDatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipDatesController],
      providers: [ShipDatesService],
    }).compile();

    controller = module.get<ShipDatesController>(ShipDatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
