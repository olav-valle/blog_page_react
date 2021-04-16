import React from "react";

export const NotFound = () => {
    return (
        <div className="w-4/5 m-auto flex flex-col text-center p-5 pt-20">
            <div className="h-10 capitalize  text-2xl font-bold">404</div>
            <div className="h-10 capitalize  text-xl leading-5">Page not Found</div>
            <div>I have no idea what you are talking about</div>
            <img
                className="w-80 m-auto"
                src="https://i.kym-cdn.com/photos/images/original/000/411/080/c7b.jpg"
                alt="Oolong the Pancake Bunny"/>
            <div>So here's a bunny with a pancake on its head.</div>
        </div>
    )
}