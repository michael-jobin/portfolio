import { useEffect, useState } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { format } from '@cloudinary/url-gen/actions/delivery'
import { auto } from '@cloudinary/url-gen/qualifiers/format'
import { useMediaQuery } from 'react-responsive'

interface CldPictureProps {
  cl: string
  id: string
  alt: string
  width?: number
  height?: number
}

const CldPicture = ({ cl, id, alt, width, height }: CldPictureProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [imageId, setImageId] = useState(id)
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => setLoading(false)

  useEffect(() => {
    setImageId(isMobile ? `${id}_sp` : id)
  }, [isMobile, id])

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dfsgqxojd',
    },
  })

  const src = cld.image(imageId).delivery(format(auto())).toURL()

  return (
    <picture className={cl}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        style={loading ? { opacity: 0 } : {}}
      />
    </picture>
  )
}

export default CldPicture
