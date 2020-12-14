import { Claim } from '../models/claim.model';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Account } from 'msal';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private get account(): Account | null {
    return this.msal.getAccount();
  }

  get claim(): Claim | null {
    if (this.account == null) return null;

    const { oid, name, preferred_username } = this.account.idTokenClaims;
    const [firstName, lastName] = name?.split(' ') ?? ['', ''];

    console.log(this.account);
    return {
      oid: oid ?? '',
      email: preferred_username ?? '',
      fullName: name,
      firstName,
      lastName,
    };
  }

  constructor(private msal: MsalService) {
    this.msal.handleRedirectCallback(() => {});
  }

  login(): void {
    this.msal.loginRedirect();
  }

  logout(): void {
    this.msal.logout();
  }
}
