function Header() {
  const isLogin = true;
  return (
    <header>
      {isLogin ? (
        <button>Dashboard</button>
      ) : (
        <>
          <button>Login</button>
          <button>Register</button>
        </>
      )}
      {isLogin && <button>Basket</button>}
    </header>
  );
}
export default Header;
