import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getFullYear retourne l’année courante', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('getFooterCopy retourne "Holberton School" quand isIndex = true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy retourne "Holberton School main dashboard" quand isIndex = false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification retourne la bonne chaîne HTML', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
