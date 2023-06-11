interface FeaturesToggles {
  eCommerce: boolean
  languageSwitcherInNavMenu: boolean
  italianLanguage: boolean
}

const featuresToggles: FeaturesToggles = {
  eCommerce: false,
  languageSwitcherInNavMenu: false,
  italianLanguage: false,
}

export const isFeatureEnabled = (feature: keyof FeaturesToggles) =>
  featuresToggles[feature]
