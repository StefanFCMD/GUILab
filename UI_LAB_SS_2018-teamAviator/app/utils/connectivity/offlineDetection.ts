import * as connectivity from "connectivity";

export enum ConnectivityStatus {
    online, offline, unknown
}

let observables = [];
let connectivityStatus: ConnectivityStatus = ConnectivityStatus.unknown;

export function isOnline(): boolean
{
    return connectivityStatus == ConnectivityStatus.online;
}

export function addConnectivityListener(callback: (status: ConnectivityStatus) => void): void
{
    console.log('listener added');
    observables.push(callback);
}

function fireChange(newStatus: ConnectivityStatus): void
{
    console.log('fire change for ' + observables.length +' listeners');
    observables.forEach(element => {
        element(newStatus);
    });
}

connectivity.startMonitoring((newConnectionType: number) => {

    if (newConnectionType == connectivity.connectionType.none
        && connectivityStatus == ConnectivityStatus.unknown)
    {
        connectivityStatus = ConnectivityStatus.offline;
        return;
    }
    if (newConnectionType == connectivity.connectionType.none
        && connectivityStatus == ConnectivityStatus.online)
    {
        connectivityStatus = ConnectivityStatus.offline;
        fireChange(ConnectivityStatus.offline);
        return;
    }
    if (newConnectionType != connectivity.connectionType.none
        && connectivityStatus == ConnectivityStatus.unknown)
    {
        connectivityStatus = ConnectivityStatus.online;
        return;
    }
    if (newConnectionType != connectivity.connectionType.none
        && connectivityStatus == ConnectivityStatus.offline)
    {
        connectivityStatus = ConnectivityStatus.online;
        fireChange(ConnectivityStatus.online);
        return;
    }
});