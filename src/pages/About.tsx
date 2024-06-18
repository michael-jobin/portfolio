// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../types'
import resume from '../data/resume.json'

const About = () => {
  const { language } = useSelector((state: RootState) => state.languages)
  return (
    <div className="about basic__page">
      <section className="aboutResume">
        <div className="aboutResume__head">
          <p>Currently living and working in Tokyo.</p>
        </div>
        <div className="aboutResume__body">
          {resume.map((item, index) => (
            <div className="aboutResume__row basic__grid" key={index}>
              <p className="aboutResume__main">
                {item.nameJa && language === 'ja' ? (
                  <strong>
                    <em>{item.nameJa}</em>
                  </strong>
                ) : (
                  item.nameEn && <strong>{item.nameEn}</strong>
                )}
                {item.titleJa && language === 'ja' ? (
                  <i>
                    <em>{item.titleJa}</em>
                  </i>
                ) : (
                  item.titleEn && <i>{item.titleEn}</i>
                )}
              </p>
              <p className="aboutResume__years">
                {item.begin}
                {item.end && (
                  <>
                    &thinsp;ー&thinsp;
                    {item.end}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
