import { RouterModule } from '@angular/router';
import { HomeNgbootstrapComponent } from './home-ngbootstrap.component';

const routes = [
    { path: '', component: HomeNgbootstrapComponent}
];

export default RouterModule.forChild(routes);
