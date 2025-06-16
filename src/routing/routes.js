export const ROUTES = {
    // Auth routes
    LOGIN: "/partners/partners-login",
    
    // Dashboard routes
    HOME: "/partners/partners-home",
    PROPERTIES: "/partners/partners-properties",
    PROPERTY_DETAILS: "/partners/partners-property-details",
    EXPENSES: "/partners/partners-expenses",
    
    // Profile routes
    KYC_DETAILS: "/partners/partners-kyc-details",
    BANK_DETAILS: "/partners/partners-bank-details",
    OWNER_DETAILS: "/partners/partners-owner-details",
};

export const ROUTE_CONFIG = {
    [ROUTES.LOGIN]: {
        title: "Login",
        description: "Sign in to your account",
        isPublic: true
    },
    [ROUTES.HOME]: {
        title: "Dashboard",
        description: "Welcome to your dashboard",
        isPrivate: true
    },
    [ROUTES.PROPERTIES]: {
        title: "Properties",
        description: "Manage your properties",
        isPrivate: true
    },
    [ROUTES.EXPENSES]: {
        title: "Expenses",
        description: "Track and manage expenses",
        isPrivate: true
    }
};