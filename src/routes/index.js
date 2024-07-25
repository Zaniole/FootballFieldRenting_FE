import HomePage from '../pages/HomePage/HomePage';
import StadiumsPage from '../pages/StadiumsPage/StadiumsPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import StadiumDetails from '../pages/StadiumDetails/StadiumDetails';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/stadiums',
        page: StadiumsPage,
        isShowHeader: true
    },
    {
        path: '/stadiumDetails',
        page: StadiumDetails,
        isShowHeader: true
    },
    {
        path: '/signIn',
        page: SignInPage,
        isShowHeader: true
    },
    {
        path: '/signUp',
        page: SignUpPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]