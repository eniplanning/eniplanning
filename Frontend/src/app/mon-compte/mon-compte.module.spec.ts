import { MonCompteModule } from './mon-compte.module';

describe('MonCompteModule', () => {
  let monCompteModule: MonCompteModule;

  beforeEach(() => {
    monCompteModule = new MonCompteModule();
  });

  it('should create an instance', () => {
    expect(monCompteModule).toBeTruthy();
  });
});
