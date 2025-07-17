function Header() {
  const isLogin = true;
  return (
    <header>
      {isLogin ? (
        <>
          <button>Dashboard</button>
          <button>Basket</button>
        </>
      ) : (
        <>
          <button>Login</button>
          <button>Register</button>
        </>
      )}
    </header>
  );
}
export default Header;
