class Auth {

    constructor() {
        this.sessionStorage = sessionStorage.getItem("persist:root");
        this.user = this.sessionStorage ? JSON.parse(this.sessionStorage) : {}
        this.authenticated = this.user.authenticated ? true : false
    }

    login(cb) {
        this.sessionStorage = sessionStorage.getItem("persist:root");
        this.user = this.sessionStorage ? JSON.parse(this.sessionStorage) : {}
        if (
            this.user.authenticated &&
            this.user.value.token &&
            this.user.value.member_id
        ) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
        cb()
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth();