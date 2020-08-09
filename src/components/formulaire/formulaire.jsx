import React, { Fragment } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import '../../components/formulaire/formulaire.css';

export const Inscription = () => {


    return (
        <Fragment>
            <h3 className="title">Authentification du professionnel</h3>
            <div className="p-formgroup-inline">
                <div className="p-field">
                    <label htmlFor="firstname5" className="p-sr-only">Nom</label>
                    <InputText id="firstname5" type="text" placeholder="Nom" defaultvalue="" />
                </div>
                <div className="p-field">
                    <label htmlFor="lastname5" className="p-sr-only">Prénom</label>
                    <InputText id="lastname5" type="text" placeholder="Prénom" defaultvalue=""/>
                </div>
                <Button label="Connectez-vous" className="p-button-rounded"  />
            </div>
        </Fragment>
    )
}

export default Inscription;