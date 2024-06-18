import { useState } from 'react'
import TagSelect from './TagSelect'
import categories from '../data/categories.json'
import { useSelector } from 'react-redux'
import { RootState } from '../types'

const TagSelectButton = () => {
  const { currentTag } = useSelector((state: RootState) => state.works)
  const { language } = useSelector((state: RootState) => state.languages)

  const [showOptions, setShowOptions] = useState(false)

  const getTitle = () => {
    if (currentTag in categories) {
      return language === 'ja' ? (
        <em>{categories[currentTag as keyof typeof categories].ja}</em>
      ) : (
        categories[currentTag as keyof typeof categories].en
      )
    }
    return 'No category selected'
  }

  return (
    <div className="tagSelectButton__row">
      <div
        className="tagSelectButton"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <p className="tagSelectButton__title">
          {getTitle()}
          <svg viewBox="0 0 9.34 6.5">
            <polygon points="4.67 6.5 0 1.11 1.28 0 4.67 3.9 8.05 0 9.34 1.11 4.67 6.5" />
          </svg>
        </p>
        {showOptions ? (
          <div className="tagSelectButton__options">
            <TagSelect />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TagSelectButton
