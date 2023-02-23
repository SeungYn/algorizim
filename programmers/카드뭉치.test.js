const solution = require('./카드뭉치');

describe('카드 뭉치 테스트', () => {
  it('yes', () => {
    expect(
      solution(
        ['i', 'drink', 'water'],
        ['want', 'to'],
        ['i', 'want', 'to', 'drink', 'water']
      )
    ).toBe('Yes');
  });

  it('no', () => {
    expect(
      solution(
        ['i', 'water', 'drink'],
        ['want', 'to'],
        ['i', 'want', 'to', 'drink', 'water']
      )
    ).toBe('No');
  });
});
