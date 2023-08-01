import { Test, TestingModule } from '@nestjs/testing';
import { ShipDatesService } from './ship-dates.service';

describe('ShipDatesService', () => {
  let service: ShipDatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipDatesService],
    }).compile();

    service = module.get<ShipDatesService>(ShipDatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
