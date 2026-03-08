import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    if (isAdmin) {
        return true;
    } else {
        // Redirect to home if not authorized
        alert('Restricted Area! (Simulating 403)');
        return router.createUrlTree(['/']);
    }
}