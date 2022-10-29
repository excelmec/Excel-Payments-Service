import { lazy } from 'react'

const LandingPage = lazy(() => import('./LandingPage/LandingPage'));
const AboutUsPage = lazy(() => import('./AboutUsPage/AboutUsPage'));
const ContactUsPage = lazy(() => import('./ContactUsPage/ContactUsPage'));
const TnC = lazy(() => import('./TnC/TnC'));
const Services = lazy(() => import('./Services/Services'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy/PrivacyPolicy'));
const Success = lazy(() => import('./Success/Success'));

export { 
    LandingPage, AboutUsPage, ContactUsPage, TnC, Services, PrivacyPolicy, Success
}