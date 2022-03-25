import 'regenerator-runtime';
import TeckStackService from '../../services/TeckStacks/TeckStackService';
import TeckStackRepository from '../../services/TeckStacks/TeckStackRepository';
import StubTeckStackRepositoryEmpty from './Stub_TeckStackRepositoryEmpty';
import StubTeckStackRepository from './Stub_TeckStackRepository';

describe('Test to get all teckstack by keyword', () => {
  let req;

  beforeEach(() => {
    req = {
      query: {
        keyword: 'javascript',
      },
    };
  });

  it('if keyword is undefined, return obejct containing false and msg', async () => {
    const teckStackService = new TeckStackService(req, new TeckStackRepository());
    req.query.keyword = undefined;

    const findAllByKeyword = await teckStackService.findAllByKeyword();

    expect(findAllByKeyword).toEqual({ success: false, msg: 'keyword is undefined' });
  });

  it('if tackstacks array length is zero, return object containing false and msg', async () => {
    const teckStackService = new TeckStackService(req, new StubTeckStackRepositoryEmpty());
    const findAllByKeyword = await teckStackService.findAllByKeyword();

    expect(findAllByKeyword).toEqual({ success: false, msg: `There aren't tackstacks you finded` });
  });

  it('if tackstacks arr is true, return object containing true and tackstacks', async () => {
    const teckStackService = new TeckStackService(req, new StubTeckStackRepository());
    const findAllByKeyword = await teckStackService.findAllByKeyword();

    expect(findAllByKeyword).toEqual({
      success: true,
      tackStacks: [
        {
          teckName: 'javascript',
          logoUrl: 'abc/abc',
        },
      ],
    });
  });
});
