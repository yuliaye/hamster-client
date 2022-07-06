// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import { context } from '../models';
import { account } from '../models';

export function WailsInit(arg1: context.Context): Promise<Error>;

export function GetAccountInfo(): Promise<account.Account | Error>;

export function IsAccount(): Promise<boolean>;

export function IsAccountSetting(): Promise<boolean>;

export function SaveOrderIndex(arg1: number): void;
