import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { TokenFee } from '../core';
export declare type CreateAccount = {
    address: PublicKey;
    mint: PublicKey;
};
export declare type CreateAccountResult = {
    address: PublicKey;
    mint: PublicKey;
    error: Error | null;
};
export declare function buildCreateAccountListFromTokenFees(connection: Connection, feePayer: PublicKey, tokenFees: TokenFee[]): Promise<CreateAccount[]>;
export declare function createAccounts(connection: Connection, feePayer: Keypair, accounts: CreateAccount[]): Promise<CreateAccountResult[]>;
