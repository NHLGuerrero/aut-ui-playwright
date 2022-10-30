import { test } from '@playwright/test';
import { SingUpPage } from './pages/sign-up';
import { LoginPage } from './pages/login-page';
import { HomePage } from './pages/home-page';
import { AddTocartMacbookPage } from './pages/addtocart-macbook-page';
import { PlaceOrder } from './pages/place-order-page';

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

test('flujo de compras end to end', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const addtocartMacbook = new AddTocartMacbookPage(page);
  const placeOrder = new PlaceOrder(page);
  const clientInfo = {
    name: 'Nahuel',
    country: 'Argentina',
    city: 'Buenos Aires',
    creditCard: '123456789',
    month: 'Octubre',
    year: '2022',
  };
  await test.step('inicio sesion con las credenciales validas', async () => {
    await login.goto();
    await login.logIn();
  });
  await test.step('agrego una laptop al carrito', async () => {
    await home.toBuylaptop();
    await addtocartMacbook.goto();
    await addtocartMacbook.checkTextMacbook('MacBook air')
    await addtocartMacbook.addtocartMacbook();
    await addtocartMacbook.goToCart();
  });
  await test.step('completo los datos de compra', async () => {
    await placeOrder.goto();
    await placeOrder.checkProductName('MacBook air');
    await placeOrder.goPlaceOrder();
    await placeOrder.completePlaceOrder(clientInfo);
  });
});