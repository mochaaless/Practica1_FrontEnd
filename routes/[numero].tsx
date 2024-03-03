import {FreshContext, Handlers, PageProps} from "$fresh/server.ts"
import Axios from "npm:axios"
import { Frase } from "./frase.tsx";

export type Frase = {
    data: string;
}

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Frase>) => {
        const {number} = ctx.params; 
        const response = await Axios.get<Frase>(`https://filmquotes.deno.dev/${number}`)
        return ctx.render(response.data)
    }
}

const Page = (props: PageProps<Frase>) => {
    return (
        <body class={"img-fondo1"}>
            <div>
                <a href={"https://www.linkedin.com/in/david-mochales/"}><img src="https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/05/26/14642426446623.jpg" class="dev"/></a>
                <a href={"https://twitter.com/JordiWildFan/status/585536482733064192"}><img src="https://1.bp.blogspot.com/_ifQAq1nSWoU/TSdYhxz47gI/AAAAAAAAB4M/SkRDDMlZco4/s1600/img553.jpg" class="spam1"/></a>
                <a href={"https://www.mediamarkt.es/?ad-machina=7Qa5-13QC:4beG-13QD:8Ssd~e&gad_source=1&ds_rl=1275860&gclid=CjwKCAiA3JCvBhA8EiwA4kujZu5yscvIGyQTUXnRE4HQLcAhPXwtRYU82WeocTc5p7LZsyH7I8RGZhoClEQQAvD_BwE&gclsrc=aw.ds"}><img src="https://www.pandasecurity.com/es/mediacenter/src/uploads/2015/01/mediamarket-spam1.jpg" class="spam2"/></a>
                <a href={"https://github.com/mochaaless"}><img src="https://4.bp.blogspot.com/-ZG0gN91dGsE/VuHlWTyYA4I/AAAAAAAAFQQ/s67ew1F7oqo/s1600/spam.jpg" class="spam3"/></a>
                <a href={"https://www.adelgar.es/landing/45-de-descuento/?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZucsxdGW92j7HECGgSzepqD2Giwwm7Fm-abY4Z0pvJ6GBaB58t6kwxoC5oEQAvD_BwE"}><img src="https://ep01.epimg.net/verne/imagenes/2014/12/09/articulo/1418141248_736053_1418145425_sumario_normal.png" class="spam4"/></a>
            </div>
            <div>
                <p class="texto-api">{props.data}</p>
                <a href={"/"}><img class="exit" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Exit_logo.svg/2560px-Exit_logo.svg.png"></img></a>
            </div>
        </body>
    )
}

export default Page