import { ModelesModule } from './modeles.module';

describe('ModelesModule', () => {
  let modelesModule: ModelesModule;

  beforeEach(() => {
    modelesModule = new ModelesModule();
  });

  it('should create an instance', () => {
    expect(modelesModule).toBeTruthy();
  });
});
