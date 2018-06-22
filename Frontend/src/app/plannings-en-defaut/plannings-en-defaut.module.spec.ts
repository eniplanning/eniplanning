import { PlanningsEnDefautModule } from './plannings-en-defaut.module';

describe('PlanningsEnDefautModule', () => {
  let planningsEnDefautModule: PlanningsEnDefautModule;

  beforeEach(() => {
    planningsEnDefautModule = new PlanningsEnDefautModule();
  });

  it('should create an instance', () => {
    expect(planningsEnDefautModule).toBeTruthy();
  });
});
