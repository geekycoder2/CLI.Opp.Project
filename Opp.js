"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class Client {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.clients = [];
    }
    addClient(obj) {
        this.clients.push(obj);
    }
}
const persons = new Person();
const programmStrat = (persons) => __awaiter(void 0, void 0, void 0, function* () {
    do {
        console.log("Welcome Guest");
        const ans = yield inquirer_1.default.prompt({
            type: "list",
            message: "Ap kiss say bat Karna Chahaingay...",
            name: "select",
            choices: ["khud say:Self", "Client"],
        });
        if (ans.select == "khud say:Self") {
            console.log(`Hello M Talking with Myself`);
            console.log(`Now I am Fine`);
        }
        if (ans.select == "Client") {
            const ans = yield inquirer_1.default.prompt({
                type: "input",
                message: "Ap ko kis Client say baat karni hay.",
                name: "Client",
            });
            const client = persons.clients.find(val => val.name == ans.Client);
            if (!client) {
                const name = new Client(ans.Client);
                persons.addClient(name);
                console.log(`Hello i am ${name.name}, Now I am Fine`);
                console.log(persons.clients);
            }
            if (client) {
                console.log(`Hello i am ${client.name}, Now I am Fine...........`);
                console.log(persons.clients);
            }
        }
    } while (true);
});
programmStrat(persons);
