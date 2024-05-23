const baseURl = 'http://localhost:3000/'

async function requester(method, url, data) {
    const option = {
        method,
    }
    if (data) {
        option['headers'] = { 'Content-type': 'application/json' }
        option['body'] = JSON.stringify(data)
    }

    //if the request is slow or smth throw abort
    const controller = new AbortController()
    const timeOutId = setTimeout(() => { controller.abort() }, 5000)
    option.signal = controller.signal

    try {
        const response = await fetch(baseURl + url, option)
        clearTimeout(timeOutId)

        if (!response.ok) {
            throw new Error(response.status + '---' + response.statusText)
        }

        return response.json()

    } catch (err) {
        console.log(err)
    }
}


export const POST = requester.bind(null, 'POST')
export const GET = requester.bind(null, 'GET')
export const DEL = requester.bind(null, 'DELETE')
export const PUT = requester.bind(null, 'PUT')
