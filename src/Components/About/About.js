import React from 'react';

import classes from './About.css';
import Gregor from '../../Assets/Images/greg.png';
import Phone from '../../Assets/Images/Icons/phone.svg';
import Email from '../../Assets/Images/Icons/envelope.svg';
import Github from '../../Assets/Images/Icons/github.svg';
import HtmlLogo from '../../Assets/Images/HTMLLogo.png';
import CSSLogo from '../../Assets/Images/CSS3Logo.png';
import JSLogo from '../../Assets/Images/js-logo.png';
import ReactLogo from '../../Assets/Images/ReactLogo.png';
// import fds from ''

const about = (props) => {

    return (
        <div className={classes.About}>
            <img className={classes.MainImage} src={Gregor} alt='MyPhoto'></img>
            <h1 className={classes.Copy} >Grzegorz <br/> Dytrych</h1>
            <div className={classes.Contact} >
                <div className={classes.ContactBox}>
                    <img className={classes.ListImage} src={Phone} alt='phonelogo'></img>
                    <h2>516 096 431</h2>
                </div>
                <div className={classes.ContactBox}>
                    <img className={classes.ListImage} src={Email} alt='emaillogo'></img>
                    <h2><form action='mailto:karczmarz@gmail.com' target='_blank' rel="noopener noreferrer"><button>karczmarz@gmail.com</button></form></h2>
                </div>
                <div className={classes.ContactBox}>
                    <img className={classes.ListImage} src={Github} alt='githublogo'></img>
                    <h2><a href="https://github.com/Sasquatch88" target='_blank' rel="noopener noreferrer"><button>Sasquatch88</button></a></h2>
                </div>
            </div>
            <div className={classes.Education} >
                <h1>Edukacja</h1>
                <ul>
                    <li>
                        <b>2010-2012</b>
                        <br />
                        Uniwersytet w Białymstoku, 
                        2-letnie Studia Magisterskie na kierunku Historia ze specjalizacją Media i Świat Współczesny. Dyplom Magistra
                    </li>
                    <li>
                        <b>2007-2010</b>
                        <br />
                        Uniwersytet w Białymstoku, 
                        3-letnie studia licencjackie Bibliotekoznawstwo i Informacja Naukowa. Dyplom Licencjata

                    </li>
                </ul>
            </div>
            <div className={classes.Experience} >
                <h1>Doświadczenie</h1>
                <ul>
                    <li>
                        <b>08.2019 - Obecnie</b>
                        <br />
                        Specjalista ds. logistyki i realizacji zamówień, GLOSEL Sp. z o.o., utrzymanie prawidłowego 
                        przepływu towarów na dużym magazynie, zarządzanie ludźmi i zasobami.
                    </li>
                    <li>
                        <b>02.2019 - 06.2019</b>
                        <br />
                        Monter rowerów/pracownik magazynu wysyłkowego, OLYMPIC SPORTS Sp. z o.o. 
                        - montaż, regulacja, pakowanie rowerów - sprzedaż wysyłkowa.
                    </li>
                    <li>
                        <b>02.2018 - 06.2018</b>
                        <br />
                        Operator wózka widłowego bocznego, MGG Netherlands, Tegelen, Holandia - 
                        wytwarzanie aluminiowych części samochodowych. 
                    </li>
                    <li>
                        <b>06.2016 - 02.2018</b>
                        <br />
                        Kontroler jakości, Domiberia Benelux B.V., Horst, Holandia – Wytwarzanie produktów 
                        metalurgicznych – puszek na żywność.
                    </li>
                </ul>
            </div>
            <div className={classes.Assets} >
                <h1>Umiejętności</h1>
                <ul className={classes.Skills}>
                    <li>
                        <div className={classes.ListItem}>EN</div>
                        <div className={classes.BarShow + ' ' + classes.b1}></div>
                    </li>
                    <li>
                        <div className={classes.ListItem}>DE</div>
                        <div className={classes.BarShow + ' ' + classes.b2}></div>
                    </li>
                    <li>
                        <div className={classes.ListItem}>NL</div>
                        <div className={classes.BarShow + ' ' + classes.b3}></div>
                    </li>
                    <li>
                        <img className={classes.ListImage} src={HtmlLogo} alt='htmllogo'/>
                        <div className={classes.BarShow + ' ' + classes.b4}></div>
                    </li>
                    <li>
                        <img className={classes.ListImage} src={CSSLogo} alt='CSSlogo'/>
                        <div className={classes.BarShow + ' ' + classes.b5}></div>
                    </li>
                    <li>
                        <img className={classes.ListImage} src={JSLogo} alt='JS Logo' />
                        <div className={classes.BarShow + ' ' + classes.b6}></div>
                    </li>
                    <li>
                        <img className={classes.ListImage} src={ReactLogo} alt='React Logo' />
                        <div className={classes.BarShow + ' ' + classes.b7}></div>
                    </li>
                </ul>
                <h1 className={classes.Hobbys}>Zainteresowania</h1>
                <ul className={classes.Hobbys} >
                    <li>Fantastyka</li>
                    <li>Literatura</li>
                    <li>Historia</li>
                    <li>Kosmos</li>
                    <li>Astrofizyka</li>
                    <li>Jazda rowerem</li>
                    <li>Kontakt z naturą</li>
                </ul>
            </div>
        </div>
    );
};

export default about;