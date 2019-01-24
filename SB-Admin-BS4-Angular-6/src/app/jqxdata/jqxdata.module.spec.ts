import { JqxdataModule } from './jqxdata.module';

describe('JqxdataModule', () => {
  let jqxdataModule: JqxdataModule;

  beforeEach(() => {
    jqxdataModule = new JqxdataModule();
  });

  it('should create an instance', () => {
    expect(jqxdataModule).toBeTruthy();
  });
});
