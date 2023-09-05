import * as ex from "@completium/experiment-ts";
import * as att from "@completium/archetype-ts-types";
export enum sex_types {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}
export abstract class sex extends att.Enum<sex_types> {
    abstract to_mich(): att.Micheline;
    equals(v: sex): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
}
export class Male extends sex {
    constructor() {
        super(sex_types.Male);
    }
    to_mich() { return new att.Int(0).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Female extends sex {
    constructor() {
        super(sex_types.Female);
    }
    to_mich() { return new att.Int(1).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export class Other extends sex {
    constructor() {
        super(sex_types.Other);
    }
    to_mich() { return new att.Int(2).to_mich(); }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
}
export const mich_to_sex = (m: any): sex => {
    const v = (new att.Nat((m as att.Mint).int)).to_big_number().toNumber();
    switch (v) {
        case 0: return new Male();
        case 1: return new Female();
        case 2: return new Other();
        default: throw new Error("mich_to_asset_type : invalid value " + v);
    }
};
export class person implements att.ArchetypeType {
    constructor(public first: string, public last: string, public birth: Date) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([att.string_to_mich(this.first), att.string_to_mich(this.last), att.date_to_mich(this.birth)]);
    }
    equals(v: person): boolean {
        return att.micheline_equals(this.to_mich(), v.to_mich());
    }
    static from_mich(input: att.Micheline): person {
        return new person(att.mich_to_string((input as att.Mpair).args[0]), att.mich_to_string((input as att.Mpair).args[1]), att.mich_to_date((input as att.Mpair).args[2]));
    }
}
export const person_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("string", ["%first"]),
    att.prim_annot_to_mich_type("string", ["%last"]),
    att.prim_annot_to_mich_type("timestamp", ["%birth"])
], []);
const changeName_arg_to_mich = (param: string): att.Micheline => {
    return att.string_to_mich(param);
}
const changeBirthYear_arg_to_mich = (param: att.Nat): att.Micheline => {
    return param.to_mich();
}
const changeHasNose_arg_to_mich = (param: boolean): att.Micheline => {
    return att.bool_to_mich(param);
}
const changebirthdate_arg_to_mich = (param: Date): att.Micheline => {
    return att.date_to_mich(param);
}
const changeGender_arg_to_mich = (param: sex): att.Micheline => {
    return param.to_mich();
}
const updateTimeAlive_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const changeNameInBytes_arg_to_mich = (param: att.Bytes): att.Micheline => {
    return param.to_mich();
}
const changeActualBalance_arg_to_mich = (param: att.Tez): att.Micheline => {
    return param.to_mich();
}
const changeTzAddress_arg_to_mich = (param: att.Address): att.Micheline => {
    return param.to_mich();
}
const view_getFullName_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
export class Helloworld {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    get_address(): att.Address {
        if (undefined != this.address) {
            return new att.Address(this.address);
        }
        throw new Error("Contract not initialised");
    }
    async get_balance(): Promise<att.Tez> {
        if (null != this.address) {
            return await ex.get_balance(new att.Address(this.address));
        }
        throw new Error("Contract not initialised");
    }
    async deploy(params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("contracts/helloworld.arl", {}, params)).address;
        this.address = address;
    }
    async changeName(param: string, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeName", changeName_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async changeBirthYear(param: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeBirthYear", changeBirthYear_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async changeHasNose(param: boolean, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeHasNose", changeHasNose_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async changebirthdate(param: Date, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changebirthdate", changebirthdate_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async changeGender(param: sex, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeGender", changeGender_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async updateTimeAlive(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "updateTimeAlive", updateTimeAlive_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async changeNameInBytes(param: att.Bytes, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeNameInBytes", changeNameInBytes_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async changeActualBalance(param: att.Tez, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeActualBalance", changeActualBalance_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async changeTzAddress(param: att.Address, params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "changeTzAddress", changeTzAddress_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeName_param(param: string, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeName", changeName_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeBirthYear_param(param: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeBirthYear", changeBirthYear_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeHasNose_param(param: boolean, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeHasNose", changeHasNose_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changebirthdate_param(param: Date, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changebirthdate", changebirthdate_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeGender_param(param: sex, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeGender", changeGender_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_updateTimeAlive_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "updateTimeAlive", updateTimeAlive_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeNameInBytes_param(param: att.Bytes, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeNameInBytes", changeNameInBytes_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeActualBalance_param(param: att.Tez, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeActualBalance", changeActualBalance_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_changeTzAddress_param(param: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "changeTzAddress", changeTzAddress_arg_to_mich(param), params);
        }
        throw new Error("Contract not initialised");
    }
    async view_getFullName(params: Partial<ex.Parameters>): Promise<string | undefined> {
        if (this.address != undefined) {
            const mich = await ex.exec_view(this.get_address(), "getFullName", view_getFullName_arg_to_mich(), params);
            return mich.value ? att.mich_to_string(mich.value) : undefined;
        }
        throw new Error("Contract not initialised");
    }
    async get_name(): Promise<string> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_string((storage as att.Mpair).args[0]);
        }
        throw new Error("Contract not initialised");
    }
    async get_birthYear(): Promise<att.Nat> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Nat.from_mich((storage as att.Mpair).args[1]);
        }
        throw new Error("Contract not initialised");
    }
    async get_hasNose(): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_bool((storage as att.Mpair).args[2]);
        }
        throw new Error("Contract not initialised");
    }
    async get_birthDate(): Promise<Date> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_date((storage as att.Mpair).args[3]);
        }
        throw new Error("Contract not initialised");
    }
    async get_timeAlive(): Promise<att.Duration> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Duration.from_mich((storage as att.Mpair).args[4]);
        }
        throw new Error("Contract not initialised");
    }
    async get_nameInBytes(): Promise<att.Bytes> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Bytes.from_mich((storage as att.Mpair).args[5]);
        }
        throw new Error("Contract not initialised");
    }
    async get_actualBalance(): Promise<att.Tez> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Tez.from_mich((storage as att.Mpair).args[6]);
        }
        throw new Error("Contract not initialised");
    }
    async get_tzAddress(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[7]);
        }
        throw new Error("Contract not initialised");
    }
    async get_gender(): Promise<sex> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return mich_to_sex((storage as att.Mpair).args[8]);
        }
        throw new Error("Contract not initialised");
    }
    async get_tuple(): Promise<[
        att.Nat,
        string
    ]> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return (p => {
                return [att.Nat.from_mich((p as att.Mpair).args[0]), att.mich_to_string((p as att.Mpair).args[1])];
            })((storage as att.Mpair).args[9]);
        }
        throw new Error("Contract not initialised");
    }
    async get_complexTuple(): Promise<[
        att.Nat,
        [
            string,
            string
        ]
    ]> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return (p => {
                return [att.Nat.from_mich((p as att.Mpair).args[0]), (p => {
                        return [att.mich_to_string((p as att.Mpair).args[0]), att.mich_to_string((p as att.Mpair).args[1])];
                    })(att.pair_to_mich((p as att.Mpair as att.Mpair).args.slice(1, 3)))];
            })((storage as att.Mpair).args[10]);
        }
        throw new Error("Contract not initialised");
    }
    async get_p(): Promise<person> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return person.from_mich(att.pair_to_mich((storage as att.Mpair as att.Mpair).args.slice(11, 14)));
        }
        throw new Error("Contract not initialised");
    }
    errors = {};
}
export const helloworld = new Helloworld();