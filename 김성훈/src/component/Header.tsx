const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-[#f1f1f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#121317]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.578 8.578C5.528 11.628 3.451 15.514 2.609 19.745c-.842 4.231-.41 8.616 1.241 12.601 1.651 3.985 4.446 7.392 8.033 9.788 3.586 2.397 7.803 3.676 12.116 3.676s8.53-1.279 12.116-3.676c3.587-2.396 6.382-5.803 8.033-9.788 1.651-3.985 2.083-8.37 1.241-12.601-.842-4.231-2.919-8.117-5.969-11.167L24 24 8.578 8.578Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-lg font-bold">Acme Co</h2>
      </div>
      <div className="flex gap-8">
        <nav className="flex gap-9 text-sm font-medium text-[#121317]">
          <a href="#">홈</a>
          <a href="#">출근</a>
          <a href="#">휴가</a>
          <a href="#">캘린더</a>
          <a href="#">보고서</a>
        </nav>
        <div
          className="rounded-full size-10 bg-cover bg-center"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/...')` }}
        />
      </div>
    </header>
  );
};

export default Header;
