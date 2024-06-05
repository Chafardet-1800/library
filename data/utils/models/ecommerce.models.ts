
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
  },
  useMainColorWhatsapp?: boolean
}

/**
 * Modelo del div de filtros especiales
 */
export interface CmmEcomSpecialFiltersConfig {
  text: string,
  buttonText: string,
  filters: string[],
  bgClass?: string,
  textClass?: string,
  buttonIcon?: boolean,
  buttonBgClass?: string
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
  id: string,
  images: string[]
  mainImage: string
  name: string
  brand?: string
  price: string
  previousPrice?: string,
  currency: string,
  sku?: string
  partNumber?: string
  maximunPurchase?: number
  quantity: number
  aditionalInfo?: CmmEcomAditionalInfoModel[],
}

/**
 * Modelo de detalle de producto para inmobiliaria
 */
export interface CmmEcomRealstateDetailModel {
  id: string,
  images: string[],
  mainImage: string,
  name: string,
  modality: 'EN VENTA' | 'ALQUILER',
  previousPrice: string,
  price: string,
  currency: string,
  description: string,
  details: {
    icon: string,
    info: string
  }[],
  equipment: string
}

/**
 * Modelo de información adicional del producto
 */
export interface CmmEcomAditionalInfoModel {
  title: string,
  text?: string,
  texts?: string[],
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