import { InitModule } from './init.module';

describe('InitModule', () => {
  let initModule: InitModule;

  beforeEach(() => {
    initModule = new InitModule();
  });

  it('should create an instance', () => {
    expect(initModule).toBeTruthy();
  });
});
