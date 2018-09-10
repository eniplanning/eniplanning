import { LogsModule } from './logs.module';

describe('LogsModule', () => {
  let logsModule: LogsModule;

  beforeEach(() => {
    logsModule = new LogsModule();
  });

  it('should create an instance', () => {
    expect(logsModule).toBeTruthy();
  });
});
