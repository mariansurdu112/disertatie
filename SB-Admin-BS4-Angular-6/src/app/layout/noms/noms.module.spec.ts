import { NomsModule } from './noms.module';

describe('NomsModule', () => {
  let nomsModule: NomsModule;

  beforeEach(() => {
    nomsModule = new NomsModule();
  });

  it('should create an instance', () => {
    expect(nomsModule).toBeTruthy();
  });
});
