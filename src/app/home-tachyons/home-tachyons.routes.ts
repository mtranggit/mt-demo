import { RouterModule } from '@angular/router';
import { HomeTachyonsComponent } from './home-tachyons.component';

const routes = [
    { path: '', component: HomeTachyonsComponent }
];

export default RouterModule.forChild(routes);

