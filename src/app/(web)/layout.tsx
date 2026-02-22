const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="max-w-lg">{children}</div>;
};

export default MainLayout;
