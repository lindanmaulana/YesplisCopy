import { ReactNode } from "react"
import { SwiperModule } from "swiper/types"

export type TSwiperProps = {
    children: ReactNode
    spaceBetween?: number
    slidesPerView?: number
    loop?: boolean
    modules?: SwiperModule[]
    navigation?: boolean
    autoplay?: {
        delay: number,
        disableOnInteraction: boolean
    }
}