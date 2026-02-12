import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.page').then((m) => m.SignInPage),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.page').then((m) => m.SignUpPage),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'statistic',
        loadComponent: () => import('./statistic/statistic.page').then((m) => m.StatisticPage),
      },
      {
        path: 'all-cards',
        loadComponent: () => import('./all-cards/all-cards.page').then((m) => m.AllCardsPage),
      },
      {
        path: 'my-profile',
        loadComponent: () => import('./my-profile/my-profile.page').then((m) => m.MyProfilePage),
      },
      {
        path: 'profile-settings',
        loadComponent: () => import('./profile-settings/profile-settings.page').then((m) => m.ProfileSettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'send-money',
    loadComponent: () => import('./send-money/send-money.page').then((m) => m.SendMoneyPage),
  },
  {
    path: 'transfer-amount',
    loadComponent: () => import('./transfer-amount/transfer-amount.page').then((m) => m.TransferAmountPage),
  },
  {
    path: 'contacts',
    loadComponent: () => import('./contacts/contacts.page').then((m) => m.ContactsPage),
  },
  {
    path: 'reload',
    loadComponent: () => import('./reload/reload.page').then((m) => m.ReloadPage),
  },
  {
    path: 'reload-confirmation',
    loadComponent: () => import('./reload-confirmation/reload-confirmation.page').then((m) => m.ReloadConfirmationPage),
  },
  {
    path: 'request-money',
    loadComponent: () => import('./request-money/request-money.page').then((m) => m.RequestMoneyPage),
  },
  {
    path: 'notification',
    loadComponent: () => import('./notification/notification.page').then((m) => m.NotificationPage),
  },
  {
    path: 'legal-policies',
    loadComponent: () => import('./legal-policies/legal-policies.page').then((m) => m.LegalPoliciesPage),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.page').then((m) => m.ForgotPasswordPage),
  },
  {
    path: 'create-new-password',
    loadComponent: () => import('./create-new-password/create-new-password.page').then((m) => m.CreateNewPasswordPage),
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'language-selection',
    loadComponent: () => import('./language-selection/language-selection.page').then( m => m.LanguageSelectionPage)
  },
]; 

