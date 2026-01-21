// Square Configuration
// Replace these with your actual Square information

export const SQUARE_CONFIG = {
  // Your Square Online Store URL (e.g., https://your-store.square.site)
  onlineStoreUrl: process.env.NEXT_PUBLIC_SQUARE_STORE_URL || 'https://www.pennycrownyyc.com/',
  
  // Square API credentials (if using Square API)
  applicationId: process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID || '',
  accessToken: process.env.NEXT_PUBLIC_SQUARE_ACCESS_TOKEN || '',
  
  // Square Location ID
  locationId: process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID || '',
  
  // Square Online Ordering URL (if different from store URL)
  orderingUrl: process.env.NEXT_PUBLIC_SQUARE_ORDERING_URL || '',
};

// Helper function to get Square ordering URL
export const getSquareOrderingUrl = (): string => {
  if (SQUARE_CONFIG.orderingUrl) {
    return SQUARE_CONFIG.orderingUrl;
  }
  return SQUARE_CONFIG.onlineStoreUrl || '#';
};

// Helper function to get Square menu URL
export const getSquareMenuUrl = (): string => {
  return SQUARE_CONFIG.onlineStoreUrl ? `${SQUARE_CONFIG.onlineStoreUrl}/menu` : '#';
};
