export class Device {

    constructor(
        public _id: string,
        public code: string,
        public tpDevice: string,
        public name: string,
        public employee: string,
        public serial: string,
        public marca: string,
        public modelo: string,
        public location: string,

        public hardware: Hardware,
        public software: any,

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
        public architecture: string,
        public bios: string
    ) { }

}

export class Software {

    constructor(
        public system: {
            name: { type: string },
            functionality: { type: string },
            license: { type: string }
        },
        public office: {
            name: { type: string },
            functionality: { type: string },
            license: { type: string }
        },
        public antivirus: {
            name: { type: string },
            functionality: { type: string },
            license: { type: string },
        }
    ) { }
}