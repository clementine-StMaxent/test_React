import { BehaviorSubject, Subject } from "rxjs";
import ClientModel from '../models/clientModel';

class ApiClient {

    constructor() {
        //BehaviorSubject = observable
        this._clientsBH = new BehaviorSubject([]);
        this.clientsObs = this._clientsBH.asObservable();
        this._clientBH = new BehaviorSubject(new ClientModel());
        this.clientObs = this._clientBH.asObservable();
        // permet aux valeurs d'être multidiffusées vers de nombreux observateurs
        this._resp = new Subject();
        this.respObs = this._resp.asObservable();
        this.uri = '/api/clients';
    }
    // Create
    ajouterclient(client) {
        fetch(this.uri,
            {
                method: "POST",
                body: JSON.stringify(client),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(resp => this._resp.next(resp));
    }


    // Read
    afficherclients() {
        // Super clean
        // appeler la methode afficherclient charge la liste des clients depuis le back et renvois le resultat à l'observer
        fetch(this.uri)
            .then(resp => resp.json())
            .then(clients => clients.map(client => Object.assign(new ClientModel(), client)))
            .then(clients => {
                //relier à l'observable et aux clients
                this._clientsBH.next(clients)
            });
    }

    // Update
    updateclient(client) {
        fetch(this.uri + `/${client.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(client),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(resp => this._resp.next(resp));
    }

    // Delete
    async deleteclient(id) {
        const resp = await fetch(this.uri + '/' + id,
            {
                method: 'DELETE'
            });
        return resp;
    }
}
const instance = new ApiClient();
Object.freeze(instance);
export default instance;