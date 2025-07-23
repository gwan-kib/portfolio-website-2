import { Helmet } from 'react-helmet';

export default function CustomHead({ title }) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="icon" href="/reusables/websiteLogoGold.png" type="image/png" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/styles/general-styles.css" />
            <link rel="stylesheet" href="/styles/navbar-styles.css" />
        </Helmet>
    );
}
