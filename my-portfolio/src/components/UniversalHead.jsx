import { Helmet } from 'react-helmet';
import '../styles/general-styles.css';
import '../styles/navbar-styles.css';
import '../styles/mainpage-styles.css';
import '../styles/resume-styles.css';

function UniversalHead({ title }) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="icon" href="/reusables/websiteLogoGold.png" type="image/png" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
}

export default UniversalHead;