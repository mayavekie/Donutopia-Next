import {parseCookies, destroyCookie} from "nookies"
import Router from "next/router"


//Als de gebruiker niet is ingelogd, doorverwijzen naar specifieke pagina
export const isNotAuthenticated = (ctx, url) => {
    const cookies = parseCookies(ctx)

    if (typeof cookies.jwtToken==="undefined"){
        ctx.res.statusCode= 302
        ctx.res.setHeader('Location',url)
    }
}

//Als de gebruiker is ingelogd, doorverwijzen naar specifieke pagina
export const isAuthenticated = (ctx, url) => {
    const cookies = parseCookies(ctx)

    if (typeof cookies.jwtToken!=="undefined"){
        ctx.res.statusCode= 302
        ctx.res.setHeader('Location',url)
    }
}

//Als gebruikt uitlogt, cookie wordt vernietigd
export const logout= () => {
    destroyCookie(null, "jwtToken")
    Router.push("/")
}