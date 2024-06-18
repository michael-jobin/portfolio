import type { PictureProps } from '../types'
const Picture: React.FC<PictureProps> = ({ cl, src, alt, format, width, height, noSp }) => {
  return (
    <picture className={cl}>
      {/* {!noSp && <source media="(max-width: 768px)" srcSet={`${src}_sp.webp`} type="image/webp" />} */}
      {!noSp && <source media="(max-width: 768px)" srcSet={`${src}_sp${format}`} />}
      {/* <source srcSet={`${src}.webp`} type="image/webp" /> */}
      <img src={`${src}${format}`} alt={alt} width={width} height={height} />
    </picture>
  )
}

export default Picture
