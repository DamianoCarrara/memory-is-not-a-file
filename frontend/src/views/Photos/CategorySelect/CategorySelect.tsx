import { useRouter } from 'next/router'
import Select, { components, DropdownIndicatorProps } from 'react-select'
import { useEffect, useState } from 'react'
import { CategoriesResponse } from '../../../types'
import { useStyles } from './CategorySelect.styles'
import { selectStyle, categoriesToOptions } from './utils'
import { Option } from './types'
import { Icon, AngleDown } from '../../../components/Icons'
import { locations } from '../../../utils/locations'

interface CategorySelectProps {
  slug: string
  categories: CategoriesResponse
}

const DropdownIndicator = (props: DropdownIndicatorProps<Option, false>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <components.DropdownIndicator {...props}>
    <Icon icon={AngleDown} size=".82em" />
  </components.DropdownIndicator>
)

export const CategorySelect = ({ slug, categories }: CategorySelectProps) => {
  const classes = useStyles()
  const router = useRouter()
  const options = categoriesToOptions(categories)
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((o) => o.value === slug) || options[0]
  )

  useEffect(() => {
    setSelectedOption(options.find((o) => o.value === slug) || options[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <div className={classes.container} id="selection">
      <Select
        styles={selectStyle}
        components={{ DropdownIndicator }}
        value={selectedOption}
        onChange={(option) => {
          if (option && slug !== option.value) {
            setSelectedOption(option)   
            void router.push(
              option.value === 'home'
              ? locations.home
                : locations.category(option.value) 
            )
          }
        }}
        options={options}
      />
    </div>
  )
}
