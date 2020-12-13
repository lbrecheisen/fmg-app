import { Injectable } from '@angular/core';
import { SmsClient } from '@azure/communication-sms';
import { environment } from '@fmg/config';

@Injectable({ providedIn: 'root' })
export class SmsService {
  private client = new SmsClient(environment.azure.communication.connection);

  constructor() {}

  async send(message: string) {
    await this.client.send({
      from: '+18332153240',
      to: ['+18166462289'],
      message,
    });
  }
}
