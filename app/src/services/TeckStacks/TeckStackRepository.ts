import Repository from '../Root/Repository';

export default class TeckStackRepository extends Repository {
  constructor() {
    super();
  }

  async findAllByKeyword(): Promise<[]> {
    const tackStacks: [] = [];

    return tackStacks;
  }
}
