import { test, expect } from '@playwright/test';
import { SingUpPage } from './pageobjects/sign-up';
import { LoginPage } from './pageobjects/login-page';

test('registro exitoso', async ({ page }) => {
  const singup = new SingUpPage(page);
  await singup.goto();
  await singup.createAccount();
});

test('inicio de sesion con credenciales validas', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.logIn();
});
