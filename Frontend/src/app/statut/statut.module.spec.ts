import { StatutModule } from './statut.module';

describe('StatutModule', () => {
  let statutModule: StatutModule;

  beforeEach(() => {
    statutModule = new StatutModule();
  });

  it('should create an instance', () => {
    expect(statutModule).toBeTruthy();
  });
});
