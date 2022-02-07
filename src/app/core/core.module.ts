import {NgModule, Optional, SkipSelf} from '@angular/core';
import {EnsureModuleLoadedOnceGuard} from './ensure-module-loaded-once.guard';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
