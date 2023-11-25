import Page from './page.js';


class LoginPage extends Page {



    open() {
        return super.open('login');
    }
}

export default new LoginPage();
