import { Component } from '@angular/core';

@Component({
  selector: 'app-google-sign-in',
  template: ` <div
      id="g_id_onload"
      data-client_id="429777386332-et8akgfdrrqnh22n6ck2tlu5a29osdho.apps.googleusercontent.com"
      data-context="signin"
      data-ux_mode="popup"
      data-callback="handleSignInWithGoogle"
      data-auto_prompt="false"
    ></div>

    <div
      class="g_id_signin"
      data-type="icon"
      data-shape="square"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
    ></div>`,
  standalone: true,
})
export class GoogleSignInComponent {}
