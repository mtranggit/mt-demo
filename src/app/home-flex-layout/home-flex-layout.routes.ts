import { RouterModule } from '@angular/router';
import { HomeFlexLayoutComponent } from './home-flex-layout.component';

const routes = [
    { path: '', component: HomeFlexLayoutComponent }
];

export default RouterModule.forChild(routes);
