export const locationsBase = {
  photo: `/photos`,
  category: `/categories`,
  about: `/about`,
  contacts: `/contacts`,
  press: "/press",
  buy: `/buy`,
  news: `/news`,
};

export const locations = {
  home: "/",
  photo: (slug: string) => `${locationsBase.photo}/${slug}/`,
  category: (slug: string) => `${locationsBase.category}/${slug}/`,
  about: `${locationsBase.about}/`,
  contacts: `${locationsBase.contacts}/`,
  press: `${locationsBase.press}/`,
  news: `${locationsBase.news}/`,
  buy: `${locationsBase.buy}/`,
  termsAndConditions: `/terms-and-conditions/`,
  privacyPolicy: `/privacy-policy/`,
};
