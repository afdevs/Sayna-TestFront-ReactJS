import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

export const Layout = (props:any) => {
    return (
        <div>
            <Header />
            <Main {...props} />
            <Footer />
        </div>
    )
}
