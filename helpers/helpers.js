import {parseCookies, destroyCookie} from "nookies"
import Router from "next/router"

// export const getJWT = (ctx) => {
//     const cookies = parseCookies(ctx)
//     const jwt = cookies.jwtToken

//     if (typeof jwt === "undefined"){
//         return { props: {}}
//     } else { return{ props: {jwt}}}
// }

export const isLoggedIn = (ctx, url) => {
    const cookies = parseCookies(ctx)

    if (typeof cookies.jwtToken==="undefined"){
        ctx.res.statusCode= 302
        ctx.res.setHeader('Location',url)
    }
}

export const getJwt = (ctx) => {
    const cookies = parseCookies(ctx)
    const jwt = cookies.jwtToken;
    return jwt;
}

export const logout= () => {
    destroyCookie(null, "jwtToken")
    Router.push("/")
}