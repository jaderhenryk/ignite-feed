import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className="flex justify-center py-5 px-0 bg-gray-800">
      <img
        className="h-9"
        src={igniteLogo}
        alt="Logo tipo da aplicação"
      />
    </header>
  )
}