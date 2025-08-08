interface FetchOption {
    method?:string;
    body?: BodyInit | null | undefined;
}
interface Params extends FetchOption {
    url:string;
}
interface ObjectOptions extends FetchOption {
    headers: Record<string, string>
}

export const fetchApi = ({url, method, body}:Params) => {
    let options:ObjectOptions = {
        method:method??'GET',
        body:body??null,
        headers: {
            "Content-Type":"application/json"
        }
    }

    if(!options.body) delete options.body;
    return fetch(url, options);
}