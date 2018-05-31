
export class ServerInfo{
    hostAddress: string;
    hostName: string;

    constructor(name: string, address?: string){
        this.hostAddress = address;
        this.hostName = name;
    }
}