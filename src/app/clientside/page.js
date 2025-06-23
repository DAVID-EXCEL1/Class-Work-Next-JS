"use client"

import React, { useEffect, useState } from 'react'

const Page = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        async function fetchJoke() {
            const res = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await res.json();
            setJoke(data.value)
        }
        fetchJoke();
    })

    return (
        <div>
            <h1>
                Random Joke
            </h1>

            <p>
                Integer hendrerit consequat nisi non imperdiet. Ut ullamcorper tempus mi ac facilisis. Fusce sem nisl, porta id luctus vitae, tincidunt aliquet erat. Duis interdum sagittis lobortis. Nullam quis iaculis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ex, viverra accumsan consequat volutpat, efficitur non orci. Ut metus justo, sollicitudin non risus ut, hendrerit laoreet tortor. Nullam dapibus imperdiet volutpat. Sed id viverra justo, sit amet rutrum urna. Mauris sit amet sodales ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                Aenean dapibus maximus dictum. Pellentesque euismod odio eget odio iaculis, et rhoncus dui aliquet. In id consequat nisl. Morbi lobortis lorem sed turpis vulputate maximus. Morbi placerat non tortor a ultrices. Nunc laoreet at odio quis consequat. In hac habitasse platea dictumst. Mauris dictum erat nec metus volutpat, sed consequat est tincidunt. Donec dapibus tristique risus vitae pulvinar.

                Quisque risus lacus, bibendum et tortor id, dapibus pulvinar lacus. Suspendisse mattis purus felis. Nam placerat volutpat dui et dictum. Donec eu sollicitudin justo. Pellentesque et lacus lectus. Etiam quis nulla dapibus, tempor tellus ac, vehicula turpis. Pellentesque at lacus non metus lacinia condimentum nec nec est. Nullam condimentum ac sem quis molestie. Integer lectus ipsum, gravida id mi eget, mattis pretium nisl.

                Vestibulum ac pulvinar tellus, elementum egestas metus. Nullam at elementum nisi. Nulla facilisis tristique tellus, sed interdum justo pulvinar at. Mauris luctus pellentesque elit. Cras malesuada commodo pulvinar. Praesent ac lacinia nisi. Fusce rhoncus, sem finibus fringilla ornare, velit sapien sagittis nisl, vitae efficitur dui nisi ac felis. Morbi quis sem et risus ornare vehicula.
            </p>
            <p>{joke}</p>
        </div>
    )
}

export default Page
