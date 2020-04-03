describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Adding Todo Item should work!', async () => {
    const text = 'some Todo';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();
    await expect(element(by.text(text).withAncestor(by.id('todoList')))).toBeVisible();
  });

  it('Completing Todo Item should work!', async () => {
    const text = 'some Todo';
    await element(by.id('textInput')).tap();
    await element(by.id('textInput')).typeText(text);
    await element(by.id('addButton')).tap();

    await element(by.id('completeButton')).multiTap(2);
    await expect(element(by.id('completed').and(by.text(text).withAncestor(by.id('todoList'))))).toBeVisible();
  });
});
