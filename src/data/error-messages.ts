export const ERROR_MESSAGES = {
    login: {
        wrongCredentials: 'Epic sadface: Username and password do not match any user in this service',
        lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
        requiredUsername: 'Epic sadface: Username is required',
    },
    checkout: {
        firstNameRequired: 'Error: First Name is required',
        postalCodeInvalid: 'Error: Postal Code is invalid',
    }
} as const;