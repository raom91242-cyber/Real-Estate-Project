class Auth {
    constructor() {
        // Robustly read from localStorage in case the stored data is malformed
        try {
            const rawUsers = localStorage.getItem('users');
            this.users = rawUsers ? JSON.parse(rawUsers) : [];
        } catch (err) {
            console.warn('Auth: failed to parse users from localStorage, resetting to empty array', err);
            this.users = [];
            localStorage.removeItem('users');
        }

        try {
            const rawCurrent = localStorage.getItem('currentUser');
            this.currentUser = rawCurrent ? JSON.parse(rawCurrent) : null;
        } catch (err) {
            console.warn('Auth: failed to parse currentUser from localStorage, resetting to null', err);
            this.currentUser = null;
            localStorage.removeItem('currentUser');
        }
    }

    // Helper to persist users to localStorage
    saveUsers() {
        try {
            localStorage.setItem('users', JSON.stringify(this.users));
            console.log('Auth: users saved to localStorage', this.users);
        } catch (err) {
            console.error('Auth: failed to save users to localStorage', err);
        }
    }

    // Helper to persist current user
    saveCurrentUser() {
        try {
            if (this.currentUser) {
                localStorage.setItem('currentUser', (this.currentUser));
                console.log('Auth: currentUser saved to localStorage', this.currentUser);
            } else {
                localStorage.removeItem('currentUser');
                console.log('Auth: currentUser removed from localStorage');
            }
        } catch (err) {
            console.error('Auth: failed to save currentUser to localStorage', err);
        }
    }

    signup(fullName, email, password) {
        // Check if user already exists
        if (this.users.find(user => user.email === email)) {
            throw new Error('User already exists');
        }

        // Create new user
        const user = {
            id: Date.now(),
            fullName,
            email,
            password, // In production, password should be hashed
            createdAt: new Date()
        };

        // Add to users array
        this.users.push(user);
        this.saveUsers();

        console.log('Auth: signup successful', { email: user.email, id: user.id });

        return user;
    }

    login(email, password) {
        // Find user
        const user = this.users.find(user => user.email === email && user.password === password);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        // Store current user
        this.currentUser = user;
        this.saveCurrentUser();

        console.log('Auth: login successful', { email: user.email, id: user.id });

        return user;
    }

    logout() {
        this.currentUser = null;
        this.saveCurrentUser();

        console.log('Auth: user logged out');
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}