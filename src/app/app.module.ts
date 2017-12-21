import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LivecasinoPage } from './../pages/livecasino/livecasino';
import { GamelistPage } from './../pages/slotgames/gamelist/gamelist';
import { SlotgamesPage } from './../pages/slotgames/slotgames';
import { SportsbookPage } from './../pages/sportsbook/sportsbook';
import { BigwinPage } from './../pages/bigwin/bigwin';
import { LiveCasinoDetailsPage } from './../pages/livecasino/live-casino-details/live-casino-details';
import { LoginPage } from './../pages/login/login';
import { SettingsPage } from './../pages/settings/settings';
import { PersonalSettingsPage } from './../pages/personalsettings/personalsettings';
import { DepositPage } from './../pages/deposit/deposit';
import { BalancePage } from './../pages/balance/balance';
import { ApplistPage } from './../pages/applist/applist';
import { AtmDepositPage } from './../pages/atm-deposit/atmdeposit';
import { AtmDepositTermPage } from './../pages/atm-deposit-term/atmdepositterm';
import { WithdrawIndexPage } from './../pages/withdraw-index/withdrawindex';
import { WithdrawPage } from './../pages/withdraw/withdraw';
import { TransferPage } from './../pages/transfer/transfer';
import { HistoryRecordsPage } from './../pages/historyrecords/historyrecords';
import { FooterPage } from './../pages/footer/footer';
import { HeaderPage } from './../pages/header/header';
import { HelpPage } from './../pages/help/help';
import { AboutUsPage } from './../pages/help/about-us/about-us';
import { TransferHelpPage } from './../pages/help/transfer-help/transfer-help';
import { AccountHelpPage } from './../pages/help/account-help/account-help';
import { DepositHelpPage } from './../pages/help/deposit-help/deposit-help';
import { WithdrawHelpPage } from './../pages/help/withdraw-help/withdraw-help';
import { PromotionHelpPage } from './../pages/help/promotion-help/promotion-help';
import { HowtotransferPage } from './../pages/help/howtotransfer/howtotransfer';
import { TabsPage } from './../pages/tabs/tabs';
import { RegisterTermsPage } from './../pages/registerterms/registerterms';
import { RegisterNextPage } from './../pages/registernext/registernext';
import { RegisterPage } from './../pages/register/register';
import { BettingrulesPage } from './../pages/bettingrules/bettingrules';
import { LoginService } from './../services/loginService.service';
import { RulesDescriptionPage } from './../pages/bettingrules/rules-description/rules-description';
import { ResponsiblegamingPage } from './../pages/responsiblegaming/responsiblegaming';
import { SecurityPage } from './../pages/security/security';
import { PrivatePolicyPage } from './../pages/private-policy/private-policy';
import { ContactusPage } from './../pages/contactus/contactus';
import { PromotiondetailsPage } from './../pages/promotiondetails/promotiondetails';
import { PromotionPage } from './../pages/promotion/promotion';
import { Tabs2Page } from './../pages/tabs2/tabs2';
import { NavbarPage } from './../pages/navbar/navbar';
import { AliPayDepositPage } from './../pages/ali-pay-deposit/alipaydeposit';
import { NoticePage } from './../pages/notice/notice';
import { CopyrightPage } from './../pages/copyright/copyright';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FishingPage } from './../pages/fishing/fishing';
import { LottoPage } from './../pages/lotto/lotto';
import { Registerstep2Page } from './../pages/registerstep2/registerstep2';
import { SplashscreenPage } from './../pages/splashscreen/splashscreen';


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LivecasinoPage,
    SlotgamesPage,
    GamelistPage,
    SportsbookPage,
    BigwinPage,
    ApplistPage,
    LiveCasinoDetailsPage,
    LoginPage,
    SettingsPage,
    PersonalSettingsPage,
    DepositPage,
    BalancePage,
    AtmDepositTermPage,
    AtmDepositPage,
    WithdrawIndexPage,
    WithdrawPage,
    TransferPage,
    HistoryRecordsPage,
    TabsPage,
    FooterPage,
    HeaderPage,
    HelpPage,
    AboutUsPage,
    TransferHelpPage,
    AccountHelpPage,
    DepositHelpPage,
    WithdrawHelpPage,
    PromotionHelpPage,
    HowtotransferPage,
    HomePage,
    RegisterTermsPage,
    RegisterNextPage,
    RegisterPage,
    BettingrulesPage,
    RulesDescriptionPage,
    ResponsiblegamingPage,
    SecurityPage,
    PrivatePolicyPage,
    ContactusPage,
    PromotiondetailsPage,
    PromotionPage,
    Tabs2Page,
    NavbarPage,
    AliPayDepositPage,
    NoticePage,
    CopyrightPage,
    FishingPage,
    LottoPage,
    Registerstep2Page,
    SplashscreenPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:false,preloadModules: true,backButtonText: '',
    backButtonIcon: 'md-arrow-back',
    iconMode: 'md'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LivecasinoPage,
    SlotgamesPage,
    GamelistPage,
    SportsbookPage,
    BigwinPage,
    ApplistPage,
    LiveCasinoDetailsPage,
    LoginPage,
    SettingsPage,
    PersonalSettingsPage,
    DepositPage,
    BalancePage,
    AtmDepositTermPage,
    AtmDepositPage,
    WithdrawIndexPage,
    WithdrawPage,
    TransferPage,
    HistoryRecordsPage,
    TabsPage,
    FooterPage,
    HeaderPage,
    HelpPage,
    AboutUsPage,
    TransferHelpPage,
    AccountHelpPage,
    DepositHelpPage,
    WithdrawHelpPage,
    PromotionHelpPage,
    HomePage,
    HowtotransferPage,
    RegisterTermsPage,
    RegisterNextPage,
    RegisterPage,
    BettingrulesPage,
    RulesDescriptionPage,
    ResponsiblegamingPage,
    SecurityPage,
    PrivatePolicyPage,
    ContactusPage,
    PromotiondetailsPage,
    PromotionPage,
    Tabs2Page,
    NavbarPage,
    AliPayDepositPage,
    NoticePage,
    CopyrightPage,
    FishingPage,
    LottoPage,
    Registerstep2Page,
    SplashscreenPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
