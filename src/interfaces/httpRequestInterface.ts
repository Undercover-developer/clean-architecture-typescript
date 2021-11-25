export default interface httpRequest{
    path: string,
    method: string,
    pathParams: any,
    queryParams: any,
    body: any,
    userID?: any
}