import { InsightsHandler } from './handlers/insights.handler';
import { PhonePipe } from './pipes/phone.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { InsightsService } from './services/insights.service';
import { ErrorHandler, NgModule } from '@angular/core';

const pipes = [PhonePipe, SafePipe, SanitizePipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
  providers: [
    InsightsService,
    {
      provide: ErrorHandler,
      useClass: InsightsHandler,
      deps: [InsightsService],
    },
  ],
})
export class UtilModule {}
