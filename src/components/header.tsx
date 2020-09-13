import BrowserCheck from './browser-check'
import Menu from './menu'

export default function Header() {
    return (
        <header>
            <div>
                <BrowserCheck />
                <Menu />
            </div>
        </header>
    );
}
