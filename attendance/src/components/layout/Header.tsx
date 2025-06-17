const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-[#f1f1f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#121317]">
        <div className="size-4">
          {/* SVG 아이콘 생략 */}
        </div>
        <h2 className="text-lg font-bold tracking-tight">Acme Co</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {["홈", "출석", "일정", "보고서", "설정"].map((label) => (
            <a key={label} className="text-sm font-medium text-[#121317]" href="#">
              {label}
            </a>
          ))}
        </nav>
        <button className="h-10 rounded-full bg-[#f1f1f4] px-2.5 text-sm font-bold">
          {/* Bell SVG */}
          Me
        </button>
        <div
          className="size-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/...")',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
