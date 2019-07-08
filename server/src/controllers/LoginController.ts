import { Router, Request, Response, NextFunction } from 'express';
import { get, controller, use, post, bodyValidator } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('test logger');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  // @post('/login')
  // @bodyValidator('email', 'password')
  // @use(logger)
  // postLogin(req: Request, res: Response): void {
  //   const { email, password } = req.body;

  //   if (email === 'abc' && password === 'abc') {
  //     req.session = { loggedIn: true };
  //     res.redirect('/');
  //   } else {
  //     res.send('Invalid email or password');
  //   }
  // }
}
