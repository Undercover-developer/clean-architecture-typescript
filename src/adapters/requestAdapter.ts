import { Request } from 'express'
export default function requestAdapter(req: Request | any) {
    return {
        path: req.path,
        method: req.method,
        pathParams: req.params,
        queryParams: req.query,
        body: req.body,
        userID: req.userID
    }
}