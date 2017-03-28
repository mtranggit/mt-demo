import { RouterModule } from '@angular/router';

const appRoutes = [
    { path: '', loadChildren: 'app/home-bootstrap/home-bootstrap.module' },
    { path: 'ngbootstrap', loadChildren: 'app/home-ngbootstrap/home-ngbootstrap.module' },
    { path: 'ngflexlayout', loadChildren: 'app/home-flex-layout/home-flex-layout.module' },
    { path: 'ngmaterial', loadChildren: 'app/home-material/home-material.module' }
];

export default RouterModule.forRoot(appRoutes);
