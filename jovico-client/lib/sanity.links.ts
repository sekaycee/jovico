export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'bike':
      return slug ? `/bikes/${slug}` : undefined
    case 'product':
      return slug ? `/products/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}