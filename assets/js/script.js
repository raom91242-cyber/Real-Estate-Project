// {
//   'use strict';

//   /**
//    * navbar toggle in mobile
//    */

//   document.addEventListener("DOMContentLoaded", () => {

//     const navbar = document.querySelector("[data-navbar]");
//     const navToggler = document.querySelector("[data-nav-toggler]");

//     navToggler.addEventListener("click", () => {
//       navbar.classList.toggle("active");
//     });

//   });


//   /**
//    * Header scroll state
//    */

//   const header = document.querySelector("[data-header]");

//   window.addEventListener("scroll", () => {
//     header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
//   });


//   /**
//    * Add to favorite btn toggle
//    */

//   const toggleBtns = document.querySelectorAll("[data-toggle-btn]");

//   toggleBtns.forEach(toggleBtn => {
//     toggleBtn.addEventListener("click", () => {
//       toggleBtn.classList.toggle("active");
//     });
//   });

//   /**
//    * login button
//    */
//   const loginBtn = document.getElementById('loginBtn');

//   loginBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     // Create container

//     const container = document.createElement('div');
//     container.classList.add('popupContainer');
//     container.style.display = 'flex';

//     // Create form box

//     const formBox = document.createElement('div');
//     formBox.classList.add('popupForm');

//     // Add form content with tabs
//     formBox.innerHTML = `
//     <div class="auth-tabs">
//       <button class="auth-tab active" data-tab="login">Login</button>
//       <button class="auth-tab" data-tab="signup">Sign Up</button>
//     </div>

//     <div class="tab-content active" id="login-form">
//       <h2>Login</h2>
//       <form>
//         <input type="text" placeholder="Username" required><br>
//         <input type="password" placeholder="Password" required><br>
//         <input type="submit" value="Login">
//       </form>
//     </div>

//     <div class="tab-content" id="signup-form">
//       <h2>Sign Up</h2>
//       <form>
//         <input type="text" placeholder="Full Name" required><br>
//         <input type="email" placeholder="Email" required><br>
//         <input type="password" placeholder="Password" required><br>
//         <input type="password" placeholder="Confirm Password" required><br>
//         <input type="submit" value="Sign Up">
//       </form>

//       <div class="divider">
//         <span>OR</span>
//       </div>

//       <div class="social-login">
//         <button type="button" class="social-btn google-btn">
//           <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//             <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
//             <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.184L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
//             <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
//             <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
//           </svg>
//           Sign up with Google
//         </button>

//         <button type="button" class="social-btn facebook-btn">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
//             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//           </svg>
//           Sign up with Facebook
//         </button>

//         <button type="button" class="social-btn github-btn">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//           </svg>
//           Sign up with GitHub
//         </button>
//       </div>
//     </div>
//   `;




//     // Tab switching functionality
//     const tabs = formBox.querySelectorAll('.auth-tab');
//     const tabContents = formBox.querySelectorAll('.tab-content');

//     tabs.forEach(tab => {
//       tab.addEventListener('click', () => {
//         const targetTab = tab.getAttribute('data-tab');

//         // Remove active class from all tabs and contents
//         tabs.forEach(t => t.classList.remove('active'));
//         tabContents.forEach(content => content.classList.remove('active'));

//         // Add active class to clicked tab and corresponding content
//         tab.classList.add('active');
//         document.getElementById(`${targetTab}-form`).classList.add('active');
//       });
//     });

//     // Add close button
//     const closeBtn = document.createElement('button');
//     closeBtn.textContent = 'Close';
//     closeBtn.classList.add('closeBtn');
//     closeBtn.addEventListener('click', () => {
//       document.body.removeChild(container);
//     });

//     formBox.appendChild(closeBtn);
//     container.appendChild(formBox);
//     document.body.appendChild(container);

//     // Optional: Close when clicking outside form
//     container.addEventListener('click', (e) => {
//       if (e.target === container) {
//         document.body.removeChild(container);
//       }
//     });
//   });


//   // Login popup after 5 sec in the website

//   document.addEventListener("DOMContentLoaded", () => {

//     // Existing code here ...

//     // Function to create and show login popup (same as your loginBtn click popup code)

//     function showLoginPopup() {

//       setTimeout(() => {

//         const container = document.createElement('div');
//         container.classList.add('popupContainer');
//         container.style.display = 'flex';

//         const formBox = document.createElement('div');
//         formBox.classList.add('popupForm');

//         formBox.innerHTML = `
//       <div class="auth-tabs">
//       <button class="auth-tab active" data-tab="login">Login</button>
//       <button class="auth-tab" data-tab="signup">Sign Up</button>
//       </div>

//       <div class="tab-content active" id="login-form">
//       <h2>Login</h2>
//       <form>
//       <input type="text" placeholder="Username" required><br>
//       <input type="password" placeholder="Password" required><br>
//       <input type="submit" value="Login">
//       </form>
//       </div>

//       <div class="tab-content" id="signup-form">
//       <h2>Sign Up</h2>
//       <form>
//       <input type="text" placeholder="Full Name" required><br>
//       <input type="email" placeholder="Email" required><br>
//       <input type="password" placeholder="Password" required><br>
//       <input type="password" placeholder="Confirm Password" required><br>
//       <input type="submit" value="Sign Up">
//       </form>

//       <div class="divider">
//       <span>OR</span>
//       </div>

//       <div class="social-login">
//       <!-- Social buttons here as before -->
//       <!-- (Use the same SVG buttons markup from your original code) -->
//       </div>
//       </div>
//       `;

//         const tabs = formBox.querySelectorAll('.auth-tab');
//         const tabContents = formBox.querySelectorAll('.tab-content');

//         tabs.forEach(tab => {
//           tab.addEventListener('click', () => {
//             const targetTab = tab.getAttribute('data-tab');

//             tabs.forEach(t => t.classList.remove('active'));
//             tabContents.forEach(content => content.classList.remove('active'));

//             tab.classList.add('active');
//             document.getElementById(`${targetTab}-form`).classList.add('active');
//           });
//         });

//         const closeBtn = document.createElement('button');
//         closeBtn.textContent = 'Close';
//         closeBtn.classList.add('closeBtn');
//         closeBtn.addEventListener('click', () => {
//           document.body.removeChild(container);
//         });

//         formBox.appendChild(closeBtn);
//         container.appendChild(formBox);
//         document.body.appendChild(container);

//         container.addEventListener('click', (e) => {
//           if (e.target === container) {
//             document.body.removeChild(container);
//           }
//         });
//       }, 5000);

//     }

//     // Automatically show login popup after 5 seconds (5000 ms)
//     showLoginPopup()

//   });


// }

'use strict';

/**
 * navbar toggle in mobile
 */
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelector("[data-nav-toggler]");

  navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Existing toggle favorite buttons code
  const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
  toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
    });
  });

  // Initialize auth
  const auth = new Auth();

  // Login button click handler
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showAuthPopup();
  });

  // Check if user is already logged in
  if (auth.isAuthenticated()) {
    updateUIForLoggedInUser(auth.currentUser);
  }

  function showAuthPopup() {
    const container = document.createElement('div');
    container.classList.add('popupContainer');
    container.style.display = 'flex';

    const formBox = document.createElement('div');
    formBox.classList.add('popupForm');

    formBox.innerHTML = `
      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="login">Login</button>
        <button class="auth-tab" data-tab="signup">Sign Up</button>
      </div>

      <div class="tab-content active" id="login-form">
        <h2>Login</h2>
        <form id="loginForm">
          <input type="email" placeholder="Email" required><br>
          <input type="password" placeholder="Password" required><br>
          <div class="error-message"></div>
          <input type="submit" value="Login">
        </form>
      </div>

      <div class="tab-content" id="signup-form">
        <h2>Sign Up</h2>
        <form id="signupForm">
          <input type="text" placeholder="Full Name" required><br>
          <input type="email" placeholder="Email" required><br>
          <input type="password" placeholder="Password" required><br>
          <input type="password" placeholder="Confirm Password" required><br>
          <div class="error-message"></div>
          <input type="submit" value="Sign Up">
        </form>

        <div class="divider">
          <span>OR</span>
        </div>

        <div class="social-login">
          <button type="button" class="social-btn google-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
             <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
             <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.184L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
             <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
             <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
          <button type="button" class="social-btn facebook-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Sign up with Facebook
          </button>
          <button type="button" class="social-btn github-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign up with GitHub
          </button>
        </div>
      </div>
    `;

    // Add tab switching functionality
    const tabs = formBox.querySelectorAll('.auth-tab');
    const tabContents = formBox.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`${targetTab}-form`).classList.add('active');
      });
    });

    // Handle login form submission
    const loginForm = formBox.querySelector('#loginForm');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      try {
        const user = auth.login(email, password);
        updateUIForLoggedInUser(user);
        closeAuthPopup();
      } catch (error) {
        showError(loginForm, error.message);
      }
    });

    // Handle signup form submission
    const signupForm = formBox.querySelector('#signupForm');
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = signupForm.querySelector('input[placeholder="Full Name"]').value;
      const email = signupForm.querySelector('input[type="email"]').value;
      const password = signupForm.querySelector('input[type="password"]').value;
      const confirmPassword = signupForm.querySelector('input[placeholder="Confirm Password"]').value;

      if (password !== confirmPassword) {
        showError(signupForm, 'Passwords do not match');
        return;
      }

      try {
        const user = auth.signup(fullName, email, password);
        updateUIForLoggedInUser(user);
        closeAuthPopup();
      } catch (error) {
        showError(signupForm, error.message);
      }
    });

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('closeBtn');
    closeBtn.addEventListener('click', () => closeAuthPopup());

    formBox.appendChild(closeBtn);
    container.appendChild(formBox);
    document.body.appendChild(container);

    container.addEventListener('click', (e) => {
      if (e.target === container) {
        closeAuthPopup();
      }
    });
  }

  function updateUIForLoggedInUser(user) {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.textContent = user.fullName;

    // Add logout option if not already present
    if (!document.querySelector('.logout-btn')) {
      const logoutBtn = document.createElement('button');
      logoutBtn.textContent = 'Logout';
      logoutBtn.classList.add('logout-btn');
      logoutBtn.onclick = () => {
        auth.logout();
        window.location.reload();
      };
      loginBtn.parentElement.appendChild(logoutBtn);
    }
  }

  function showError(form, message) {
    const errorDiv = form.querySelector('.error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }

  function closeAuthPopup() {
    const container = document.querySelector('.popupContainer');
    if (container) {
      document.body.removeChild(container);
    }
  }

  // Show login popup automatically after 5 seconds
  setTimeout(() => {
    if (!auth.isAuthenticated()) {
      showAuthPopup();
    }
  }, 5000);

  // New code: Handle buy buttons
  document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const card = e.target.closest('.card');
      if (!card) return;

      const titleElem = card.querySelector('.card-title');
      const priceElem = card.querySelector('.title-large');
      const addressElem = card.querySelector('address');

      const name = titleElem ? titleElem.textContent.trim() : "Unknown Property";
      const priceText = priceElem ? priceElem.textContent.trim() : "$0";
      const price = priceText.replace(/[^0-9\.]/g, ''); // Extract numeric part only
      const address = addressElem ? addressElem.textContent.trim() : "No address";

      // Redirect to cart page with property info in URL parameters
      const url = `Cart/cart.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&address=${encodeURIComponent(address)}`;
      window.location.href = url;
    });
  });
});

/**
 * Header scroll state
 */

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});
