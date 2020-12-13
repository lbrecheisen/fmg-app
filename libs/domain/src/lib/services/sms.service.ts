import { Injectable } from '@angular/core';
import { SmsClient } from '@azure/communication-sms';
import { environment } from '@fmg/config';

@Injectable({ providedIn: 'root' })
export class SmsService {
  private client = new SmsClient(environment.azure.communication.connection);

  constructor() {}

  async send(to: string[], message: string) {
    await this.client.send({
      from: environment.azure.communication.from,
      to,
      message,
    });
  }
}
