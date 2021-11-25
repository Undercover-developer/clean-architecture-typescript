export default interface authInterface {
    encryptPassword(password: string): string,
    compare(password: string, hashedPassword: string): any,
    verify(token: string): any,
    generateToken(payload: string | object): any
}