type AccountsConf = {
    [key: string]: Accounts;
};

export type Accounts = {
    [key: string]: Account;
};

export type Account = {
    pkh: string;
    sk?: string;
};

// These accounts are used by deploy scripts and integration tests

const accounts: AccountsConf = {
    sandbox: {
        admin: {
            pkh: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb",
            sk: "edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq",
        },
        artco: {
            pkh: "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6",
            sk: "edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt",
        },
        creator: {
            pkh: "tz1NqAqCgKDbma4oDGtJzZ6jMpT2Yf3LvjVQ",
            sk: "edsk3RhWtM3yqsp1qRj1VDR83XzanEMnvg7BwnePTu9ESE1KR39vBG",
        },
        user: {
            pkh: "tz1heWEsRWZz77PgAdZqBLXoUgXePe8TQixB",
            sk: "edsk3RfpoFRtkizoSxkTMyV9vCfkQGACWe6ve91d4hgdGz9jhQnbzu",
        },
    },
    ghostnet: {
        admin: {
            pkh: "tz1UxbPFjP22Hmc4tz2cxEXUx3cz17W4L7ow",
            sk: "edskRgwZgrAsBSN4tN3b6iy6opofPVxsRkn2obRkP156p6bkprxL98hZyxExv6LyBm82BkAYo97uWyZgy96rDjuVM5FehPQMz2",
        },
        artco: {
            pkh: "tz1iv68Lbh4v3PWeY7SypNMHgJ78DnS846fB",
            sk: "edskRwvobw55Fi53ikwAfo3LHwm74Dx4DwhKmM1Bz957TcVgGFhC9Ujnqq6tin4giethoLQCnfULNzGFQWxYqkKaFQbqX7euWu",
        },
        user: {
            pkh: "tz1WXJFG5GNMQ7uTAfSUsgFHXSF33Jur99QC",
            sk: "edsk2gAAMBQ5eVRcgnmbb2vsFYSG4khtoNjbZ1Xx7bezC6Swn9rnYa",
        },
    },
    mainnet: {
        artco: {
            pkh: "tz1VA3gHrGZpSCcSzZ7M2tbdvku6Uo3et1EY",
        },
    },
};

export default (network: string): Accounts => accounts[network];
