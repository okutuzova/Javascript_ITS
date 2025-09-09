export function validateCreditCard(cardNumber) {

    let clearedCardNumArray = cardNumber.split('-').join('').split('').map(Number);

    const errorMessages = 
        clearedCardNumArray.length !== 16 ? 'Wrong length' :
        new Set(clearedCardNumArray).size === 1? 'Same digits':
        clearedCardNumArray.reduce((acc, val) => acc + val, 0) <= 16 ? 'Sum less than 16':
        clearedCardNumArray[clearedCardNumArray.length - 1] % 2 !== 0? 'Last digit is odd':
        null;

    return {
        'number': cardNumber,
        'valid': !errorMessages,
        ...(errorMessages && { error: errorMessages})
        
    };
}

