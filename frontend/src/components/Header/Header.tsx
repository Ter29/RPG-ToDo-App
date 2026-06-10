import { HeaderLogo } from './HeaderLogo';
import { HeaderProgressBar } from './HeaderProgressBar';
import { HeaderActions } from './HeaderActions';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderProgressBar />
      <HeaderActions />
    </header>
  );
}