import * as React from 'react';
import {formatMessage} from './../../common/translation/Translate';

export interface LoginData {
  name: string,
  password: string,
  onSave: (e :any) => void,
  onChange: (fieldName: string, value: string) => void,
  isLoading: boolean

}

export const LoginFormComponent: React.SFC<LoginData> = (props) => {
    return (
      <div className="p-login">
        <div className={props.isLoading ? 'o-loader js-loader is-loading' : 'o-loader js-loader'}></div>
        <form className="c-form c-form--login js-login-form">
          <div className="o-brand">
            <svg width="105" height="30" viewBox="0 0 105 30" xmlns="http://www.w3.org/2000/svg"><title>idetect-logotype</title><defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="idetect-logo">
                    <g id="Group">
                        <polygon id="i" fill="#BABABA" points="0.173372093 24.3569477 3.97229651 24.3569477 3.97229651 8.11552326 0.173372093 8.11552326"></polygon>
                        <path d="M92.5599419,14.0675581 L88.7610174,14.0675581 C88.6444186,13.185436 88.3019477,12.4705814 87.7329942,11.9242151 C87.1634302,11.3790698 86.2281977,11.1055814 84.9272965,11.1055814 C84.1831395,11.1055814 83.544593,11.2447674 83.010436,11.52375 C82.4756686,11.8021221 82.0227035,12.1806105 81.6509302,12.6561628 C81.279157,13.132936 81.0062791,13.6793023 80.8322965,14.2946512 C80.6577035,14.91 80.570407,15.56625 80.570407,16.2634012 C80.570407,16.9605523 80.6577035,17.622907 80.8322965,18.2504651 C81.0062791,18.8774128 81.279157,19.4237791 81.6509302,19.888343 C82.0227035,20.3535174 82.4988663,20.7246802 83.0800291,21.0036628 C83.6605814,21.2826453 84.3577326,21.4218314 85.1714826,21.4218314 C86.2868023,21.4218314 87.105436,21.1898547 87.6286047,20.7246802 C88.1511628,20.2601163 88.5400291,19.6215698 88.795814,18.8078198 L92.5947384,18.8078198 C92.4555523,19.644157 92.1997674,20.4286047 91.8279942,21.1605523 C91.4562209,21.8925 90.9507558,22.531657 90.3122093,23.0774128 C89.6724419,23.6237791 88.9056977,24.0480523 88.0119767,24.3496221 C87.1170349,24.6511919 86.0774128,24.8025872 84.8925,24.8025872 C83.5677907,24.8025872 82.4005814,24.5638953 81.3896512,24.088343 C80.3787209,23.6121802 79.5301744,22.9791279 78.8452326,22.1885756 C78.1596802,21.3992442 77.6432267,20.4927035 77.2946512,19.4701744 C76.9460756,18.4476453 76.7714826,17.3787209 76.7714826,16.2634012 C76.7714826,15.1718895 76.9460756,14.1084593 77.2946512,13.0743314 C77.6432267,12.040814 78.1596802,11.1287791 78.8452326,10.3388372 C79.5301744,9.54889535 80.3726163,8.91584302 81.3719477,8.43906977 C82.3706686,7.96290698 83.5329942,7.72482558 84.8577035,7.72482558 C86.1818023,7.72482558 87.3148256,7.91101744 88.2555523,8.28218023 C89.1968895,8.65395349 89.9746221,9.13622093 90.5905814,9.72837209 C91.2059302,10.3211337 91.6711047,10.9956977 91.9848837,11.7502326 C92.2986628,12.5053779 92.4903488,13.2782267 92.5599419,14.0675581 Z M95.296657,3.00409884 L99.0961919,3.00409884 L99.0961919,8.14299419 L104.621512,8.14299419 L104.621512,11.3143605 L99.0961919,11.3143605 L99.0961919,24.3844186 L95.296657,24.3844186 L95.296657,3.00409884 Z M51.6270349,24.3838081 L47.8281105,24.3838081 L47.8281105,3.00409884 L51.6270349,3.00409884 L51.6270349,8.14299419 L57.1523547,8.14299419 L57.1523547,11.3143605 L51.6270349,11.3143605 L51.6270349,24.3838081 Z M32.6525581,17.4196221 C32.6989535,18.0032267 32.804564,18.5520349 32.9675581,19.0660465 C33.1305523,19.5800581 33.382064,20.0293605 33.7208721,20.414564 C34.0590698,20.7997674 34.4967733,21.1031686 35.034593,21.3253779 C35.5711919,21.5475872 36.2372093,21.6580814 37.030814,21.6580814 C38.1290407,21.6580814 38.9226453,21.4474709 39.4128488,21.0274709 C39.9036628,20.6068605 40.2656686,20.1050581 40.4988663,19.5214535 L44.3527326,19.5214535 C44.2355233,20.221657 43.9846221,20.8931686 43.5994186,21.5353779 C43.2142151,22.1781977 42.7063081,22.7440988 42.0756977,23.2343023 C41.4450872,23.7245058 40.7094767,24.1164244 39.8688663,24.4076163 C39.0276453,24.6994186 38.0820349,24.8459302 37.030814,24.8459302 C35.6529942,24.8459302 34.4564826,24.6237209 33.4406686,24.1799128 C32.4248547,23.7367151 31.5781395,23.1293023 30.9011337,22.3588953 C30.2235174,21.5884884 29.7156105,20.677064 29.3774128,19.6264535 C29.0386047,18.5752326 28.8695058,17.4544186 28.8695058,16.2634012 C28.8695058,15.049186 29.0502035,13.9161628 29.4122093,12.8655523 C29.7742151,11.8149419 30.2937209,10.9041279 30.9707267,10.1331105 C31.648343,9.36270349 32.4889535,8.76139535 33.4931686,8.32918605 C34.4967733,7.89758721 35.6420058,7.68148256 36.925814,7.68148256 C37.9770349,7.68148256 38.9635465,7.86828488 39.8859593,8.24188953 C40.8083721,8.61549419 41.614186,9.135 42.3034012,9.80040698 C42.9920058,10.4664244 43.5292151,11.242936 43.9144186,12.1299419 C44.3002326,13.0181686 44.4925291,13.9863663 44.4925291,15.0375872 C44.4925291,15.3177907 44.4864244,15.6504942 44.4748256,16.0356977 C44.4632267,16.4209012 44.4101163,16.8830233 44.3173256,17.4196221 L32.6525581,17.4196221 Z M36.820814,10.5537209 C35.630407,10.5537209 34.6371802,10.8925291 33.8435756,11.5695349 C33.0493605,12.2471512 32.6525581,13.2513663 32.6525581,14.5821802 L40.7790698,14.5821802 C40.7790698,13.3209593 40.4115698,12.3344477 39.6759593,11.6220349 C38.9403488,10.9102326 37.9886337,10.5537209 36.820814,10.5537209 Z M21.34125,22.1604942 C20.3272674,23.8032558 18.1943023,24.7824419 16.3067442,24.7824419 C11.3412209,24.7824419 7.95008721,20.8315116 7.95008721,16.2157849 C7.95008721,11.6006686 11.3412209,7.65034884 16.3067442,7.65034884 C18.1943023,7.65034884 20.3272674,8.62892442 21.34125,10.2722965 L21.34125,0.454796512 L25.1523837,0.454796512 L25.1523837,24.3630523 L21.34125,24.3630523 L21.34125,22.1604942 Z M21.34125,16.2157849 C21.34125,13.4192442 19.4530814,11.0414826 16.5161337,11.0414826 C13.6493895,11.0414826 11.7612209,13.4192442 11.7612209,16.2157849 C11.7612209,19.012936 13.6493895,21.3906977 16.5161337,21.3906977 C19.4530814,21.3906977 21.34125,19.012936 21.34125,16.2157849 Z M62.5122384,17.4196221 C62.5592442,18.0032267 62.6642442,18.5520349 62.8278488,19.0660465 C62.990843,19.5800581 63.2423547,20.0293605 63.5811628,20.414564 C63.9193605,20.7997674 64.357064,21.1031686 64.8942733,21.3253779 C65.4314826,21.5475872 66.0975,21.6580814 66.8911047,21.6580814 C67.9887209,21.6580814 68.782936,21.4474709 69.2731395,21.0274709 C69.7639535,20.6068605 70.1253488,20.1050581 70.359157,19.5214535 L74.2124128,19.5214535 C74.0952035,20.221657 73.8449128,20.8931686 73.4590988,21.5353779 C73.0738953,22.1781977 72.5659884,22.7440988 71.9353779,23.2343023 C71.3047674,23.7245058 70.569157,24.1164244 69.7285465,24.4076163 C68.887936,24.6994186 67.9423256,24.8459302 66.8911047,24.8459302 C65.5132849,24.8459302 64.3167733,24.6237209 63.3009593,24.1799128 C62.2845349,23.7367151 61.4378198,23.1293023 60.760814,22.3588953 C60.0831977,21.5884884 59.5752907,20.677064 59.2377035,19.6264535 C58.8988953,18.5752326 58.7297965,17.4544186 58.7297965,16.2634012 C58.7297965,15.049186 58.9104942,13.9161628 59.2725,12.8655523 C59.6345058,11.8149419 60.1540116,10.9041279 60.8310174,10.1331105 C61.5086337,9.36270349 62.3492442,8.76139535 63.3534593,8.32918605 C64.357064,7.89758721 65.501686,7.68148256 66.7861047,7.68148256 C67.8373256,7.68148256 68.8238372,7.86828488 69.74625,8.24188953 C70.6686628,8.61549419 71.4738663,9.135 72.1630814,9.80040698 C72.851686,10.4664244 73.3895058,11.242936 73.7747093,12.1299419 C74.1599128,13.0181686 74.3528198,13.9863663 74.3528198,15.0375872 C74.3528198,15.3177907 74.3467151,15.6504942 74.3351163,16.0356977 C74.322907,16.4209012 74.270407,16.8830233 74.1770058,17.4196221 L62.5122384,17.4196221 Z M66.6811047,10.5537209 C65.4900872,10.5537209 64.4974709,10.8925291 63.7038663,11.5695349 C62.9090407,12.2471512 62.5122384,13.2513663 62.5122384,14.5821802 L70.6393605,14.5821802 C70.6393605,13.3209593 70.2718605,12.3344477 69.53625,11.6220349 C68.8006395,10.9102326 67.848314,10.5537209 66.6811047,10.5537209 Z" id="detect" fill="#BABABA"></path>
                        <path d="M27.0173547,2.69581395 C26.2982267,2.69581395 25.6493023,2.97418605 25.1523837,3.41860465 L25.1523837,7.58563953 C25.6493023,8.0306686 26.2982267,8.3090407 27.0173547,8.3090407 C28.5673256,8.3090407 29.8242733,7.05270349 29.8242733,5.50212209 C29.8242733,3.95215116 28.5673256,2.69581395 27.0173547,2.69581395" id="dot" fill="#FF332E"></path>
                    </g>
                </g>
            </g>
            </svg>
          </div>
          <legend className="c-form__title">{formatMessage('login.welcome')}</legend>
            <p className="c-form__intro">{formatMessage('login.intro')}</p>
            <fieldset className="c-form__field">
                <label className="o-label u-visually-hidden c-form__label" htmlFor="name">{formatMessage('login.username')}</label>
                <input className="o-input c-form__input" type="text" name="name" placeholder="Username" value={props.name} onChange={onChangeInput(props)} required></input>
            </fieldset>
            <fieldset className="c-form__field">
                <label className="o-label u-visually-hidden c-form__label" htmlFor="password">{formatMessage('login.password')}</label>
                <input className="o-input c-form__input" type="password" name="password" placeholder="Password" value={props.password} onChange={onChangeInput(props)} required></input>
            </fieldset>
            <button className="o-btn o-btn--primary o-btn--large c-form__action js-login-action" type="submit" onClick={props.onSave}>{formatMessage('login.login')}</button>
        </form>
      </div>
    );
}

const onChangeInput = (props: LoginData) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value);
};