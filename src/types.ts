export interface WorksState {
 list: Work[] | undefined;
 currentTag: string
}

export interface WorkDetailsProps {
 work: Work
}

interface LinkDetails {
 url?: string
 text: string
 active: boolean
}

interface Media {
 type: string
 fileName: string
 imgFileFormat: string
 hasMobileView?: boolean
 width?: number
 height?: number
}

export interface Work {
 slug: string
 client: string
 year: number
 roleEn: string
 roleJa: string
 descriptionEn: string
 descriptionJa: string
 link?: LinkDetails
 tags: string[]
 medias: Media[]
}

export interface LanguageState {
 language: string
}

export interface viewsState {
 view: string
}

export interface RootState {
 works: WorksState
 languages: LanguageState
 views: viewsState
}

export interface PictureProps {
 cl: string
 src: string
 alt: string
 format: string
 width: number
 height: number
 noSp: boolean
}
export interface VideoProps {
 cl: string
 slug: string
 fileName: string
 alt: string
 format: string
 width: number
 height: number
 noSp: boolean
 hasMobileView?: boolean
}

export interface TagSelectProps {
 isInsideMenu?: boolean
 onTagChange?: (tag: string) => void
}