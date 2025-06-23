import Image from 'next/image';
import React from 'react'

const Page = async () => {
    // Fetch Joke from the API
    const res = await fetch("https://api.chucknorris.io/jokes/random", {
        next: { revalidate: 10000 }
    });
    // Convert the response from JSON to javascript object

    const fact = await res.json();
    return (
        <div>
            <h1>
                Random Joke
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac viverra est. Praesent id arcu massa. In dapibus, ipsum sed malesuada laoreet, risus dolor vulputate ante, nec faucibus arcu quam sed sem. Duis ut nibh dapibus, tincidunt sapien vel, aliquet tortor. Sed odio nibh, dictum quis placerat eu, fringilla eget sem. Nunc risus massa, vehicula a iaculis at, auctor eu lectus. Duis viverra ut mi efficitur pellentesque. Nullam congue, velit sed interdum molestie, magna nisi imperdiet metus, vel tristique augue mi vel felis. Quisque non sapien eu magna efficitur feugiat vel sed dui. Vivamus elementum mauris ut metus auctor, sit amet finibus diam fringilla. Donec vel erat at ante elementum vehicula vel at lectus. Duis a tellus eleifend, varius mi eget, sodales diam. Nulla nec ligula at justo gravida feugiat vitae nec risus.

                Donec orci ante, lacinia in posuere lobortis, suscipit vitae ligula. Nulla eu mauris vitae massa tempus ornare non a ligula. Aliquam at euismod massa, vel porttitor purus. Morbi laoreet efficitur tincidunt. Suspendisse at tincidunt diam. Phasellus a neque vitae eros ornare pulvinar. Donec vitae nisi non erat ultricies venenatis quis vel mi. Nulla vestibulum magna eget turpis convallis pretium. Integer turpis justo, sollicitudin ut venenatis a, malesuada eu libero. Donec a velit sapien. Nulla dolor sapien, ultricies pulvinar ante ac, imperdiet ullamcorper elit. Mauris ultrices ante dui, at laoreet orci convallis non. Nunc et ante sed urna vulputate aliquam quis sed dolor.

                Aliquam commodo nibh sed velit posuere accumsan nec at odio. Donec quis placerat arcu. Nam maximus eu lorem at lobortis. Curabitur dapibus massa vitae tellus ultricies, quis interdum nibh pretium. In pulvinar mi id nibh aliquam, id faucibus est iaculis. Morbi sit amet sodales tortor. Integer sit amet lectus sapien. Donec ut neque elementum, faucibus felis eu, rutrum augue. Maecenas maximus enim massa, eget placerat dui vehicula eu. Mauris sagittis ipsum tempus aliquet porttitor. Donec feugiat ex non ex congue, non finibus ex ultricies. Ut quis orci venenatis, suscipit metus non, interdum odio. Fusce ut lacus facilisis, tincidunt ligula et, ultrices mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum justo diam, vulputate quis consectetur nec, fermentum eget eros.

                Nulla scelerisque eros vel tincidunt pretium. Aliquam est tellus, sagittis sed dignissim et, ultricies eu ligula. Phasellus hendrerit elementum dui, eget mollis nisl euismod eu. Fusce ornare enim at lectus porttitor consequat. Curabitur venenatis ac libero a pharetra. Fusce risus augue, auctor non quam non, malesuada rhoncus augue. Integer sit amet quam laoreet, euismod mauris vel, venenatis nulla. Fusce egestas vehicula eros, et pellentesque libero malesuada a.

                Maecenas ut interdum ipsum. Sed ultricies nunc sed blandit convallis. Maecenas vitae scelerisque ex. Morbi aliquet enim at dolor imperdiet convallis. Duis ullamcorper tincidunt nulla, vel commodo massa accumsan sit amet. Integer eu ante vel lorem accumsan tincidunt. Maecenas finibus augue sit amet euismod dictum. Praesent ac quam erat. Donec risus eros, viverra ac tortor ut, luctus euismod dolor. Pellentesque mattis nulla sed urna iaculis, ac dignissim ligula convallis. Mauris interdum augue in lobortis condimentum. Aliquam libero ipsum, porttitor nec rhoncus eu, cursus quis nulla.
            </p>
            <p className='text-5xl text-amber-500'>
                {fact.value}
            </p>

            <Image src={""} alt=''/>
        </div>
    )
}

export default Page
