import { HeaderLogo } from './HeaderLogo';
import { HeaderActions } from './HeaderActions';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderActions />
    </header>
  );
}