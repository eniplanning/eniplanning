import { UtilisateursModule } from './utilisateurs.module';

describe('UtilisateursModule', () => {
  let utilisateursModule: UtilisateursModule;

  beforeEach(() => {
    utilisateursModule = new UtilisateursModule();
  });

  it('should create an instance', () => {
    expect(utilisateursModule).toBeTruthy();
  });
});
