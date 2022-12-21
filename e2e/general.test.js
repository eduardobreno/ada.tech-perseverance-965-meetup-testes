import {device, element, by} from 'detox';

describe('Meu Todo list', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Meu To do list', async () => {
    await expect(element(by.text('Meu To do list'))).toBeVisible();
    await expect(element(by.id('textInput'))).toBeVisible();
  });

  it('should add one item', async () => {
    await element(by.id('textInput')).typeText('item 01');
    await expect(element(by.id('textInput'))).toHaveText('item 01');

    await element(by.text('Adicionar')).tap();
    await expect(element(by.id('textInput'))).toHaveText('');

    await expect(element(by.text('item 01'))).toBeVisible();
  });

  it('should NOT add the same item twice', async () => {
    await element(by.id('textInput')).typeText('item 01');
    await expect(element(by.id('textInput'))).toHaveText('item 01');

    await element(by.text('Adicionar')).tap();
    await expect(element(by.id('textInput'))).toHaveText('');

    await expect(element(by.text('item 01'))).toBeVisible();
  });

  it('should add two items', async () => {
    await element(by.id('textInput')).typeText('item 01');
    await element(by.text('Adicionar')).tap();
    await element(by.id('textInput')).typeText('item 02');
    await element(by.text('Adicionar')).tap();

    await element(by.id('toggleitem 01')).tap();

    await expect(element(by.text('item 01'))).toBeVisible();
    await expect(element(by.text('item 02'))).toBeVisible();
  });

  it('should add two items and remove one', async () => {
    await element(by.id('textInput')).typeText('item 01');
    await element(by.text('Adicionar')).tap();
    await element(by.id('textInput')).typeText('item 02');
    await element(by.text('Adicionar')).tap();

    await element(by.id('toggleitem 01')).tap();

    await expect(element(by.text('item 01'))).toBeVisible();
    await expect(element(by.text('item 02'))).toBeVisible();

    await element(by.id('removeitem 01')).tap();
    await expect(element(by.text('item 01'))).not.toBeVisible();
    await expect(element(by.text('item 02'))).toBeVisible();
  });
});
