import { RouterModule } from '@angular/router';
import { HomeBootstrapComponent } from './home-bootstrap.component';
const routes = [
    { path: '', component: HomeBootstrapComponent }
];

export default RouterModule.forChild(routes);
