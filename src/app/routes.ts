import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {
        path: 'about',
        loadChildren: () =>
            import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule)
    },
    {
        path: 'contact',
        loadChildren: () =>
            import('./pages/contact-us/contact-us.module').then((m) => m.ContactUsModule)
    },
    {
        path: '',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'cart',
        loadChildren: () =>
            import('./pages/cart/cart.module').then((m) => m.CartModule)
    },
    {
        path: 'check-out',
        loadChildren: () =>
            import('./pages/check-out/check-out.module').then((m) => m.CheckOutModule)
    },
    {
        path: 'dry-fruit/:category',
        loadChildren: () =>
          import('./pages/product-grid/product-grid.module').then((m) => m.ProductGridModule),
      },
    {
        path: 'dry-fruit/:category',
        loadChildren: () =>
          import('./pages/product-detail/product-detail.module').then((m) => m.ProductDetailModule),
      },
    {
        path: '**',
        loadChildren: () =>
            import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule)
    },
    
];