export const containsWhitespace = (str: string): boolean => /\s/g.test(str);

export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  // { id: 'it', title: 'Italian' },
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)
