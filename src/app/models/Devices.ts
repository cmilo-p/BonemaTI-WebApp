export class Device {

    constructor(
        public code: string,
        public tpDevice: string,
        public name: string,
        public employee: string,
        public serial: string,
        public marca: string,
        public modelo: string,
        
        public hardware: Hardware,
        public software: Software,

        public observation: string,
        public state: boolean,
        public retirement_Date: any
    ) { }

}

export class Hardware {

    constructor(
        public ram: string,
        public cpu: string,
        public generation: string,
        public hardDisk: string,
        public itecture: string,
        public bios: string
    ) { }

}

export class Software {

    constructor() {}

}