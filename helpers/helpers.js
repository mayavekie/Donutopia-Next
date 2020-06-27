import {parseCookies, destroyCookie} from "nookies"
import Router from "next/router"


//Als de gebruiker niet is ingelogd
export const isNotAuthenticated = (ctx, url) => {
    const cookies = parseCookies(ctx)

    if (typeof cookies.jwtToken==="undefined"){
        ctx.res.statusCode= 302
        ctx.res.setHeader('Location',url)
    }
}


//Als de gebruiker is ingelogd
export const isAuthenticated = (ctx, url) => {
    const cookies = parseCookies(ctx)

    if (typeof cookies.jwtToken!=="undefined"){
        ctx.res.statusCode= 302
        ctx.res.setHeader('Location',url)
    }
}

//Als gebruikt uitlogt
export const logout= () => {
    destroyCookie(null, "jwtToken")
    Router.push("/")
}