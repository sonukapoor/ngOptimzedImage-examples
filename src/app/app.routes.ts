import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PlaceholderLayoutComponent } from './placeholder/layout.component';
import { LowResolutionBase64PlaceholderConfigComponent } from './placeholder/low-resolution-base64-placeholder-config.component';
import { LowResolutionBase64PlaceholderComponent } from './placeholder/low-resolution-base64-placeholder.component';
import { LowResolutionPlaceholderComponent } from './placeholder/low-resolution-placeholder.component';
import { ImageWithNoPriorityComponent } from './priority/image-no-priority.component';
import { ImageWithPriorityComponent } from './priority/image-with-priority.component';
import { PriorityLayoutComponent } from './priority/layout.component';
import { LcpNgImgWOPriorityComponent } from './priority/lcp-ng-img-wo-priority.component';
import { NgImgWithPriorityComponent } from './priority/ng-img-with-priority.component';
import { CustomSrcSetComponent } from './responsive/custom-src-set.component';
import { ResponsiveLayoutComponent } from './responsive/layout.component';
import { OutOfBoxComponent } from './responsive/out-of-box.component';
import { TwoColsComponent } from './responsive/two-cols.component';
import { With80vwComponent } from './responsive/with-fixed-size.component';

@Component({
  selector: 'app-priority',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <div>
      <h1>Welcome to the NgOptimizedImage Demo</h1>
      <p>
        <a routerLink="priority" routerLinkActive="selected">Priority</a> |
        <a routerLink="placeholder" routerLinkActive="selected">Placeholder</a>
        |
        <a routerLink="responsive" routerLinkActive="selected">Responsive</a>
      </p>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class LayoutComponent {}

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'priority',
        component: PriorityLayoutComponent,
        children: [
          {
            path: 'image-no-priority',
            component: ImageWithNoPriorityComponent,
          },
          {
            path: 'image-with-priority',
            component: ImageWithPriorityComponent,
          },
          {
            path: 'ng-img-with-priority',
            component: NgImgWithPriorityComponent,
          },
          {
            path: 'lcp-ng-img-wo-priority',
            component: LcpNgImgWOPriorityComponent,
          },
        ],
      },
      {
        path: 'placeholder',
        component: PlaceholderLayoutComponent,
        children: [
          {
            path: 'low-resolution-placeholder',
            component: LowResolutionPlaceholderComponent,
          },
          {
            path: 'low-resolution-base64-placeholder',
            component: LowResolutionBase64PlaceholderComponent,
          },
          {
            path: 'low-resolution-base64-placeholder-with-config',
            component: LowResolutionBase64PlaceholderConfigComponent,
          },
        ],
      },
      {
        path: 'responsive',
        component: ResponsiveLayoutComponent,
        children: [
          {
            path: 'out-of-box',
            component: OutOfBoxComponent,
          },
          {
            path: 'with-80vw',
            component: With80vwComponent,
          },
          {
            path: 'custom-src-set',
            component: CustomSrcSetComponent,
          },
          {
            path: 'two-cols',
            component: TwoColsComponent,
          },
        ],
      },
    ],
  },
];
