import HomePage from '../pages/HomePage/HomePage';
import StadiumsPage from '../pages/StadiumsPage/StadiumsPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import StadiumDetail from '../pages/StadiumDetail/StadiumDetail';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import BookingPage from '../pages/BookingPage/BookingPage';
import ProfileUserPage from '../pages/ProfileUserPage/ProfileUserPage';
import BookingHistoryPage from '../pages/BookingHistoryPage/BookingHistoryPage'
import BookingSuccessPage from '../pages/BookingSuccessPage/BookingSuccessPage';
import BookingZaloPayPage from '../pages/BookingZaloPayPage/BookingZaloPayPage';
import FindingOpponentPage from '../pages/FindingOpponentPage/FindingOpponentPage'
import RegisterFieldPage from '../pages/RegisterFieldPage/RegisterFieldPage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/stadium',
        page: StadiumsPage,
        isShowHeader: true
    },
    {
        path: '/stadium/:id',
        page: StadiumDetail,
        isShowHeader: true
    },
    {
        path: '/login',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/signUp',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/booking',
        page: BookingPage,
        isShowHeader: true
    },
    {
        path:'/profile',
        page: ProfileUserPage,
        isShowHeader: true
    },
    {
        path:'/booking-history',
        page: BookingHistoryPage,
        isShowHeader: true
    },
    {
        path: '/booking-success',
        page: BookingSuccessPage,
        isShowHeader: true
    },
    {
        path: '/booking-zalopay',
        page: BookingZaloPayPage,
        isShowHeader: true
    },
    {
        path: '/finding-opponent',
        page: FindingOpponentPage,
        isShowHeader: true
    },
    {
        path: '/field-register',
        page: RegisterFieldPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]