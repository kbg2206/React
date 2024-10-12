import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);

        this.account = new Account(client);
    }

    async createAccount({name,email,password}) {
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email,password});
            }
            else{
                throw new Error("Failed to create account");
            }
        }
        catch(error){
            throw error
        }
    }


    async login({email, password}){
        try{
            const userSession = await this.account.createEmailPasswordSession(email, password);
            return userSession;
        }
        catch(error){
            throw error
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            throw error
        }
    }

    async getUserProfile(){
        try{
            const user = await this.account.get();
            return user;
        }
        catch(error){
            throw error
        }
    }

}

const authService = new AuthService();

export default authService;