import { ShipmentsModule } from './shipments.module';

describe('ShipmentsModule', () => {
  let shipmentsModule: ShipmentsModule;

  beforeEach(() => {
    shipmentsModule = new ShipmentsModule();
  });

  it('should create an instance', () => {
    expect(shipmentsModule).toBeTruthy();
  });
});
