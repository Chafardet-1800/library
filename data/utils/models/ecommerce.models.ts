
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

export interface CmmEcomSearchDialogConfigModel {
  inputMode?: string,
  bgClass?: string,
  textClass?: string,
  inputClass?: string,
  height?: string,
  inputPlaceholder?: string,
  inputBorderRadius?: string
}
