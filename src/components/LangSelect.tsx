import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../features/languages'
import { RootState } from '../types'

const LangSelect = () => {
  const dispatch = useDispatch()
  const { language } = useSelector((state: RootState) => state.languages)
  const handleLangChange = () => {
    language === 'en' ? dispatch(setLanguage('ja')) : dispatch(setLanguage('en'))
  }
  return (
    <>
      <button onClick={handleLangChange} className="langSelect">
        {language === 'en' ? <em>{'日本語'}</em> : 'English'}
      </button>
    </>
  )
}

export default LangSelect
