import React from 'react';
import './Footer.scss';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';
import { information } from '../../lib/mock/mock';
const Footer = () => {
    return (
        <footer className="Footer">
            <div className='Footer-Left' >
                <div className='Footer-Icons'>
                    <figure className='Footer-Figure'>
                        <img src={facebook} alt='facebook' className='Footer-Image' />
                        <img src={instagram} alt='instagram' className='Footer-Image' />
                        <img src={youtube} alt='youtube' className='Footer-Image' />
                        <img src={twitter} alt='twitter' className='Footer-Image' />
                    </figure>
                </div>
                <div className='Footer-Info'>
                    <h3 className='Footer-InfoTitle'>Firma d.o.o.</h3>
                    <p className='Footer-InfoAddress'>Neka ulica 1, Grad</p>
                    <p className='Footer-InfoTelefon'>+385 77 123 4567</p>
                    <a href="mailto:kontakt@firma.hr" className='Footer-InfoMail'>kontakt@firma.hr</a>
                </div>
            </div>
            <div className='Footer-Right'>
                {information.map((info, index) => (
                    <div className='Footer-Information' key={index}>
                        <h3 className='Footer-InformationTitle'>{info.title}</h3>
                        <p className='Footer-InformationDescription'>{info.inf1} </p>
                        <p className='Footer-InformationDescription'>{info.inf2} </p>
                        <p className='Footer-InformationDescription'>{info.inf3} </p>
                        <p className='Footer-InformationDescription'>{info.inf4} </p>
                        <p className='Footer-InformationDescription'>{info.inf5} </p>
                        <p className='Footer-InformationDescription'>{info.inf6} </p>
                        <p className='Footer-InformationDescription'>{info.inf7} </p>
                        <p className='Footer-InformationDescription'>{info.inf8} </p>
                        <p className='Footer-InformationDescription'>{info.inf9} </p>
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default Footer;