export const locationsBase = {
  photo: `/photos`,
  category: `/categories`,
  about: `/about`,
  contacts: `/contacts`,
  buy: `/buy`,
}

export const locations = {
  home: '/',
  photo: (slug: string) => `${locationsBase.photo}/${slug}/`,
  category: (slug: string) => `${locationsBase.category}/${slug}/`,
  about: `${locationsBase.about}/`,
  contacts: `${locationsBase.contacts}/`,
  buy: `${locationsBase.buy}/`,
  termsAndConditions: `/terms-and-conditions/`,
  privacyPolicy: `/privacy-policy/`,
}
