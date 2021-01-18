# Tracking for Personal Sites

I wanted to see if the CORS worked better on the vercel apis.  So I tried the sample code [here](https://vercel.com/knowledge/how-to-enable-cors).




### January 16, 2020
> Put a file named `404.html` in `/public/404.html` for an automatic 404 not found!

### January 16, 2020

> req.url for the path of the domain [Source](https://nodejs.org/api/http.html#http_message_url).
> req.headers.host for the domain. [Source](https://nodejs.org/api/http.html#http_message_headers).

```javascript

export default function handler(req, res){
    console.log(req.headers.host); //returns the hostname eg: https://hostname.ca/path/to/path
    console.log(req.url); //returns the stuff after the hostname eg: https://hostname.ca/allofthetext/here/including/the/first/dash/afterthe/hostname
}

```
