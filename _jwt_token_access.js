/**
 * 1. Install jsonwebtoken
 * 2. jwt.sign (payload, secret, {expiresin:})
 * 3. Token client
 * 
 */

/**
 * How to store token in the client side
 * 1. Money --> ok type
 * 2. local storage --> ok type(XSS)
 * 3. cookies: http only
 * 
 */

/**
 * 1. set cookies with HTTP only for development
 * secure: false
 * 2. cors
 * 3. app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
  }));
 * 4. clinet side axios setting
 * 5. in axios set withCredentials: true
 */

/**
 * 1. To send cookies from the client make sure
 * you added withCredential: true
 * for the api call using axios
 * 2. 
 */