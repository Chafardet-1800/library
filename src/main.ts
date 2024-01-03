import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CmmModule } from './app/common.module';


platformBrowserDynamic().bootstrapModule(CmmModule)
  .catch(err => console.error(err));
