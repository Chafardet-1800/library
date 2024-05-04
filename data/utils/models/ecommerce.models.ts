
export interface CmmEcomFooterConfig {
  mainLogo?: string,
  mainLogoSize?: { width: string, height: string },
  items?: any,
  socialNetworkIcons?: any,
  bgColor?: string,
  bgClass?: string,
  textColor?: string,
  textClass?: string,
  businessInfo?: {
    name: string,
    direction: string,
    phone: string,
    mail: string
  }
  products?: any[],
  aboutUs?: any[],
  businessQualitiesConfig?: {
    widthClass?: string,
    showBorder?: boolean
  }
}

/**
 * Configuración del diálogo con input de búsqueda
 */
export interface CmmEcomSearchDialogConfigModel {
  inputMode?: string,
  bgClass?: string,
  textClass?: string,
  inputClass?: string,
  height?: string,
  inputPlaceholder?: string,
  inputBorderRadius?: string
}

/**
 * Modelo de la tarjeta de producto
 */
export interface CmmEcomProductCardDataModel {
  image: string
  title: string
  brand?: string
  price: string,
  currency: string,
  id: string,
  style?: {
    priceColor: string
  },
  previousprice: string
}

/**
 * Modelo del detalle de producto
 */
export interface CmmEcomProductDetailModelv2 {
  images: string[]
  mainImage: string
  name: string
  brand?: string
  price: string
  sku?: string
  partNumber?: string
  maximunPurchase?: number
  quantity: number
  aditionalInfo?: CmmEcomAditionalInfoModel[]
}

export interface CmmEcomAditionalInfoModel {
  title: string,
  text?: string,
  type?: 'variants' | 'normal',
  colorVariants?: {
    color: string,
  }[],
  imageVariants?: {
    image: string,
  }[],
  textVariants?: {
    text: string,
  }[],
}