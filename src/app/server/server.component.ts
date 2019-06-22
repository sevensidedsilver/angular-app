import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white
        }
        
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serversStatus: string = 'OFFLINE';

    constructor(){
        this.serversStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }
    getServerStatus(){
        return this.serversStatus
    }

    getColor(){
        return this.serversStatus === 'online' ? 'green' : 'red'
    }
}