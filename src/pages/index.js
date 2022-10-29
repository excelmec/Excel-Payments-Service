import { lazy } from 'react'

const LandingPage = lazy(() => import('./LandingPage/LandingPage'));
const AboutUsPage = lazy(() => import('./AboutUsPage/AboutUsPage'));
const ContactUsPage = lazy(() => import('./ContactUsPage/ContactUsPage'));
const TnC = lazy(() => import('./TnC/TnC'));
const Services = lazy(() => import('./Services/Services'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy/PrivacyPolicy'));
const SuccessPage = lazy(() => import('./SuccessPage/SuccessPage'));

export { 
    LandingPage, AboutUsPage, ContactUsPage, TnC, Services, PrivacyPolicy, SuccessPage
}