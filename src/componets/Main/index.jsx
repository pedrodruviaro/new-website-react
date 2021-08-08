import React from 'react'
import Hero from "../Hero";
import Profile from '../Profile'
import MyServices from '../MyServices'
import About from '../About'
import Work from '../Work'

export default function Index() {
    return (
        <main>
            <Hero />
            <Profile />
            <MyServices />
            <About />
            <Work />
        </main>
    )
}
