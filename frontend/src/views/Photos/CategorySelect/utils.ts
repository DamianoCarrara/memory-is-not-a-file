import { StylesConfig } from 'react-select'
import { theme } from '../../../utils/theme'
import { CategoriesResponse } from '../../../types'
import { Option } from './types'

export const categoriesToOptions = (categories: CategoriesResponse): Option[] =>
  categories.map((c) => ({ value: c.slug.current, label: c.title }))

const getOptionBgColor = (isFocused: boolean, isSelected: boolean) => {
  if (isSelected) return theme.primary
  if (isFocused) return theme.gray03

  return undefined
}

const getOptionBgColorDarkMode = (isFocused: boolean, isSelected: boolean) => {
  if (isSelected) return theme.primary
  if (isFocused) return theme.gray01

  return undefined
}

export const selectStyle: StylesConfig<Option, false> = {
  container: (provided) => ({
    ...provided,
    marginRight: 0,
    marginBottom: '1rem',

    [`@media (min-width: ${theme.mediaBpUpSm})`]: {
      marginBottom: 0,
    },
  }),

  control: (provided, state) => ({
    ...provided,
    fontSize: theme.fontSize18,
    backgroundColor: 'transparent',
    borderColor: theme.gray03,
    borderRadius: 0,
    boxShadow: state.menuIsOpen
      ? `0 0 0 ${theme.onePixel} ${theme.primary}`
      : undefined,

    '&:hover': {
      borderColor: theme.primary,
    },

    [`@media (min-width: ${theme.mediaBpUpSm})`]: {
      fontSize: theme.fontSize22,
      borderColor: 'transparent',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: theme.black,

    '&:hover': {
      color: theme.gray02,
    },

    '@media (prefers-color-scheme: dark)': {
      color: theme.white,
    },
  }),

  singleValue: (provided) => ({
    ...provided,

    '@media (prefers-color-scheme: dark)': {
      color: theme.white,
    },
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: getOptionBgColor(isFocused, isSelected),

    '&:active': {
      backgroundColor: isSelected ? theme.primaryDark : theme.gray02,
    },

    '@media (prefers-color-scheme: dark)': {
      backgroundColor: getOptionBgColorDarkMode(isFocused, isSelected),
    },
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: 0,

    '@media (prefers-color-scheme: dark)': {
      background: '#333',
    },
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
}
