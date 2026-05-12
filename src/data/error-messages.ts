export const ERROR_MESSAGES = {
    login: {
        wrongCredentials: 'Epic sadface: Username and password do not match any user in this service',
        lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
        requiredUsername: 'Epic sadface: Username is required',
    },
    checkOut: {
        firstNameRequired: 'Error: First Name is required',
        lastNameRequired: 'Error: Last Name is required',
        postalCodeRequired: 'Error: Postal Code is required',
    }
} as const;