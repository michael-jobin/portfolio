import type { WorkDetailsProps } from '../types'
import CldPicture from '../components/CldPicture'
import Video from '../components/Video'
import { Link } from 'react-router-dom'

const WorkGallery: React.FC<WorkDetailsProps> = (props) => {
  const { work } = props
  const medias = work.medias

  return (
    <section className="workGalllery basic__grid">
      {/* <div className="workGalllery__col1"></div> */}
      <div className="workGalllery__col2">
        <div className="workGalllery__container">
          {medias.map((media, index) => (
            <div
              key={index}
              className={`workGalllery__item ${
                media.width && media.height && media.height > media.width ? 'vertical' : ''
              }`}
            >
              {media.type === 'image' ? (
                <CldPicture
                  cl="workGalllery__picture"
                  id={`works/${work.slug}/${media.fileName}`}
                  alt="design preview"
                  width={media.width || 2360}
                  height={media.height || 1686}
                />
              ) : (
                <Video
                  cl="work"
                  slug={work.slug}
                  fileName={media.fileName}
                  alt="design preview"
                  format={media.imgFileFormat}
                  width={media.width || 2360}
                  height={media.height || 1686}
                  noSp={false}
                  hasMobileView={media.hasMobileView}
                />
              )}
            </div>
          ))}
        </div>
        <p className="workGalllery__linkBackHome">
          <Link to="/">
            <span>←</span>Back to list
          </Link>
        </p>
      </div>
    </section>
  )
}

export default WorkGallery
