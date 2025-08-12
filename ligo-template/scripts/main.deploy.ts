import { InMemorySigner } from '@taquito/signer';
import { TezosToolkit } from '@taquito/taquito';
import * as dotenv from 'dotenv'
import compiled from '../compiled/main.json';

dotenv.config(({ path: __dirname + '/../../.env' }))

const Tezos = new TezosToolkit("http://localhost:20000");

const prk: string = process.env.ADMIN_PRK;
const signature = new InMemorySigner(prk);
Tezos.setProvider({ signer: signature })

Tezos.tz
    .getBalance(process.env.ADMIN_ADDRESS)
    .then((balance) => console.log(`Signer balance : ${balance.toNumber() / 1000000} ꜩ`))
    .catch((error) => console.log(JSON.stringify(error)));

const deploy = async () => {
    let initial_storage = 0;

    async function orig() {
        try {
            const betting_originated = await Tezos.contract.originate({
                code: compiled,
                storage: initial_storage
            });
            console.log(`Waiting for betting origination ${betting_originated.contractAddress} to be confirmed...`);
            await betting_originated.confirmation(2);
            console.log('Confirmed betting origination : ', betting_originated.contractAddress);
            console.log('tezos-client remember contract betting_betting ', betting_originated.contractAddress, ' --force')
        } catch (error: any) {
            console.log(error)
        }
    }
    await orig();
};

deploy()