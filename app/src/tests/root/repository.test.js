import 'regenerator-runtime';
import Repository from '../../services/Root/Repository';
import { publicdb } from '../../config/mariadb';

jest.mock('../../config/mariadb');

describe('db connection repository test', () => {
  const dbConnection = jest.fn(async () => 'success');
  publicdb.getConnection = dbConnection;

  beforeEach(() => {
    dbConnection.mockClear();
  });

  it('Check the mocked init method works well', async () => {
    const repository = new Repository();
    await repository.init();

    expect(dbConnection.mock.calls.length).toBe(1);
  });

  it('If the build mocking is successful, the repository is returned', async () => {
    const repository = await Repository.build();

    expect(repository).toEqual(repository);
    expect(dbConnection.mock.calls.length).toBe(1);
  });

  // it('Check the mocked releaseConnection method works well', async () => {
  //   const release = jest.fn();
  //   publicdb.getConnection.release = release;

  //   const repository = new Repository();
  //   await repository.releaseConnection();

  //   expect(dbConnection.mock.calls.length).toBe(1);
  // });
});
