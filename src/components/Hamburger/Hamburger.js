import React, { useState } from 'react';
import './Hamburger.scss';

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="Hamburger">
                <div className="Hamburger-Nav" open={open} onClick={() => setOpen(!open)}>
                    <div className="Hamburger-NavLine"></div>
                    <div className="Hamburger-NavLine"></div>
                    <div className="Hamburger-NavLine"></div>
                </div>
                {open &&
                    <div className="Hamburger-NavHamburger" >
                        <nav className="Hamburger-NavHamburgerItem" href="/" onClick={() => setOpen(!open)} >proizvodi</nav>
                        <nav className="Hamburger-NavHamburgerItem" href="/" onClick={() => setOpen(!open)} >usluge</nav>
                        <nav className="Hamburger-NavHamburgerItem" href="/" onClick={() => setOpen(!open)}>tečajevi</nav>
                        <nav className="Hamburger-NavHamburgerItem" href="/" onClick={() => setOpen(!open)}>o nama</nav>
                    </div>
                }
            </div>
        </>
    );
}

export default Hamburger;