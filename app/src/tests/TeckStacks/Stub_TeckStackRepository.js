export default class stubTackStackRepository {
  async findAllByKeyword() {
    return [
      {
        teckName: 'javascript',
        logoUrl: 'abc/abc',
      },
    ];
  }
}
