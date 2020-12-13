import { Inject, Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

@Injectable()
export class InsightsService {
  insights: ApplicationInsights;

  constructor(@Inject('instrumentationKey') instrumentationKey: string) {
    this.insights = new ApplicationInsights({
      config: { instrumentationKey, enableAutoRouteTracking: true },
    });
    this.insights.loadAppInsights();
    this.insights.trackPageView();
  }

  page(name?: string, uri?: string) {
    this.insights.trackPageView({ name, uri });
  }

  event(name: string, properties?: { [key: string]: any }) {
    this.insights.trackEvent({ name }, properties);
  }

  metric(name: string, average: number, properties?: { [key: string]: any }) {
    this.insights.trackMetric({ name, average }, properties);
  }

  exception(exception: Error, severityLevel?: number) {
    this.insights.trackException({ exception, severityLevel });
  }

  trace(message: string, properties?: { [key: string]: any }) {
    this.insights.trackTrace({ message }, properties);
  }
}
