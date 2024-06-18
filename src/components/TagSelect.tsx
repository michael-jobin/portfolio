import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTag } from '../features/works'
import { RootState, TagSelectProps } from '../types'
import categories from '../data/categories.json'

const TagSelect: React.FC<TagSelectProps> = ({ isInsideMenu = false, onTagChange }) => {
  const { currentTag } = useSelector((state: RootState) => state.works)
  const { language } = useSelector((state: RootState) => state.languages)
  const dispatch = useDispatch()

  const handleTagChange = (tag: string) => {
    dispatch(setCurrentTag(tag))
    if (isInsideMenu && onTagChange) {
      onTagChange(tag)
    }
  }

  return (
    <ul className="tagSelect">
      {Object.keys(categories).map((key) => (
        <li key={key}>
          <button
            className={`tagSelect__item ${currentTag === key ? 'active' : ''}`}
            onClick={() => handleTagChange(key)}
          >
            {language === 'ja' ? (
              <em>{categories[key as keyof typeof categories].ja}</em>
            ) : (
              categories[key as keyof typeof categories].en
            )}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TagSelect
