export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "TimelessKashi",
        "alternateName": "BanarasBound",
        "description": "Curated Varanasi tour packages, Ganga Aarti experiences, Sarnath visits, and local guided trips.",
        "url": "https://timelesskashi.in",
        "telephone": "+91-8795019256",
        "email": "timelesskashi1@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Varanasi",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.instagram.com/timelesskashi_"
        ],
        "priceRange": "₹₹",
        "areaServed": {
            "@type": "City",
            "name": "Varanasi"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "TimelessKashi",
        "url": "https://timelesskashi.in",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://timelesskashi.in/packages"
            },
            "query-input": "required name=search_term_string"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "TimelessKashi",
        "image": "https://timelesskashi.in/carousel/e83ec978-76a8-4503-a983-db45ec0e28b1.jpg",
        "@id": "https://timelesskashi.in",
        "url": "https://timelesskashi.in",
        "telephone": "+91-8795019256",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Varanasi",
            "addressLocality": "Varanasi",
            "addressRegion": "UP",
            "postalCode": "221001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.3176,
            "longitude": 82.9739
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    );
}
