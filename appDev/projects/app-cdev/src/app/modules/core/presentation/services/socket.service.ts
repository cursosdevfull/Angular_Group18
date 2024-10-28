import { Injectable, signal } from '@angular/core';
import * as io from 'socket.io-client';

import { ParametersService } from './parameters.service';

export type TNotification = {
  action: 'UPDATE' | 'DELETE' | 'CREATE';
  data: any;
};

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket!: io.Socket;

  notificationData = signal<any>(null);

  constructor(private readonly parameters: ParametersService) {}

  connect() {
    const accessToken = sessionStorage.getItem('accessToken');
    this.socket = io.connect(`${this.parameters.apiUrl}`, {
      auth: { token: accessToken },
    });
  }

  subscribe(roomToSubscribe: string) {
    this.socket.emit(roomToSubscribe);
  }

  getNotifications(notification: string) {
    this.socket.on(notification, (data: any) =>
      this.notificationData.update(() => data)
    );
  }
}
