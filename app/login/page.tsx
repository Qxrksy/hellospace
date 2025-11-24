// HS-ADD: app/login/page.tsx
export default function Page() {
  return (
    <div className="box standalone">
      <h4>Log in</h4>
      <form>
        <table>
          <tbody>
            <tr className="email">
              <td className="label"><label htmlFor="email">Email</label></td>
              <td><input id="email" name="email" type="email" placeholder="you@example.com" /></td>
            </tr>
            <tr className="password">
              <td className="label"><label htmlFor="password">Password</label></td>
              <td><input id="password" name="password" type="password" /></td>
            </tr>
            <tr className="remember">
              <td></td>
              <td><label><input type="checkbox" /> Remember me</label></td>
            </tr>
            <tr className="buttons">
              <td></td>
              <td><button className="login_btn standalone" type="button">Log in</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

