import { ModulesModule } from './modules.module';

describe('ModulesModule', () => {
  let modulesModule: ModulesModule;

  beforeEach(() => {
    modulesModule = new ModulesModule();
  });

  it('should create an instance', () => {
    expect(modulesModule).toBeTruthy();
  });
});
