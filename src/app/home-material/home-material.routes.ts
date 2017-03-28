import { RouterModule } from '@angular/router';
import { HomeMaterialComponent } from './home-material.component';

const routes = [
    { path: '', component: HomeMaterialComponent }
];
export default RouterModule.forChild(routes);
