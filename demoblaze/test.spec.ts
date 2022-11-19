import { test } from '@playwright/test';
import { SingUpPage } from './pages/sign-up-page';
import { LoginPage } from './pages/login-page';
import { HomePage } from './pages/home-page';
import { ProductDetailPage } from './pages/product-detail-page';
import { CartPage } from './pages/cart-page';
import { PlaceOrder } from './pages/place-order-page';

test('alta de usuario', async ({ page }) => {
  const singup = new SingUpPage(page);
  const createUserInfo = {username: "usuario1996", password: "12345678"};
  await singup.goto();
  await singup.createAccount(createUserInfo);
});

test('inicio de sesion con credenciales validas', async ({ page }) => {
  const login = new LoginPage(page);
  const loginUserInfo = {username: "usuario1996", password: "12345678"}
  await login.goto();
  await login.logIn(loginUserInfo);
});


test('flujo de compras end to end', async ({ page }) => {
  const login = new LoginPage(page);
  const loginUserInfo = {username: "usuario1996", password: "12345678"}
  const home = new HomePage(page);
  const productDetail = new ProductDetailPage(page);
  const cart = new CartPage(page);
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
    await login.logIn(loginUserInfo);
  });
  await test.step('busco por categoria y selecciono el producto', async () => {
    await home.searchByCategory('Laptops');
    await home.selectProduct('MacBook air');
  });
  await test.step('añado una laptop al carrito de compras', async () => {
    await productDetail.checkProductName('MacBook air');
    await productDetail.addtocart();
    await productDetail.goToCart();
  });
  await test.step('verifico que el producto esta en el carrito y completo los datos de compra', async () => {
    await cart.checkProductName('MacBook air')
    await placeOrder.goPlaceOrder();
    await placeOrder.completePlaceOrder(clientInfo);
  });
});