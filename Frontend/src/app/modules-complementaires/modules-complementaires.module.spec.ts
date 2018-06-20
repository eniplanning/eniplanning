import { ModulesComplementairesModule } from './modules-complementaires.module';

describe('ModulesComplementairesModule', () => {
  let modulesComplementairesModule: ModulesComplementairesModule;

  beforeEach(() => {
    modulesComplementairesModule = new ModulesComplementairesModule();
  });

  it('should create an instance', () => {
    expect(modulesComplementairesModule).toBeTruthy();
  });
});
