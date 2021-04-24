import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CheckdeviceService {

  constructor(
    private _toast: ToastController,
  ) { 
  }
  checkDevice() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent );
    };
    // Detect if app is install
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.displayPopUpInstall();
    }
  }

  async displayPopUpInstall() {
    const toast = await this._toast.create({
      message: `Pour installer l'application...`,
      position: 'bottom',
      keyboardClose: true,
      color: 'dark',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    await toast.present();
  }

}