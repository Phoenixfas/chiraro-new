const packages = [
    {
        id: 1,
        name: 'web',
        categories: [
            {
                id: 1,
                name: 'static',
                packages: [
                    {
                        id: 1,
                        name: 'Starter Splash',
                        description: 'For Individuals, freelancers, or small businesses looking for a simple online presence.',
                        price: "13,800 ETB",
                        features: [
                            'Up to 5 static HTML pages with responsive design.',
                            'Clean and professional design template.',
                            'Contact form with basic validation.',
                            'Search Engine Optimization (SEO) basics implemented.',
                            'Free domain name and hosting for the first year.',
                            'Free Updates for upto 1 months',
                        ],
                        main: false
                    },
                    {
                        id: 2,
                        name: 'Business Boost',
                        description: 'For Growing businesses aiming to establish a professional image and expand their online reach.',
                        price: "22,800 ETB",
                        features: [
                            'Up to 10 static HTML pages with responsive design.',
                            'Customizable design template with various layout options.',
                            'Image and video gallery',
                            'Basic animations and interactive elements using JavaScript.',
                            'Free SSL certificate for secure browsing.',
                            'Free Updates for upto 2 months',
                        ],
                        main: true
                    },
                    {
                        id: 3,
                        name: 'Premium Showcase',
                        description: 'For Established brands and businesses with specific design and functionality requirements.',
                        price: "32,800 ETB",
                        features: [
                            'Up to 15 pages for comprehensive brand representation',
                            'Custom-designed website tailored to your specific needs.',
                            'Advanced SEO optimization for better search engine ranking.',
                            'Integration with analytics tools',
                            'Advanced animations',
                            'Free Updates for upto 3 months',
                        ],
                        main: false
                    }
                ]
            },
            {
                id: 2,
                name: 'dynamic',
                packages: [
                    {
                        id: 1,
                        name: 'LaunchPad Lite',
                        description: 'For Small businesses or startups seeking interactive elements.',
                        price: "27, 800 ETB",
                        features: [
                            'User-friendly Content Management System (CMS)',
                            'Up to 8 dynamic pages with responsive design.',
                            'Basic blog functionality with commenting and social sharing options.',
                            'Contact form with advanced features like file uploads and CAPTCHA.',
                            'Integration with essential plugins for SEO, security, and analytics.',
                            'Free 1 year hosting and domain',
                            'Free Updates for upto 1 months',
                            
                        ],
                        main: false
                    },
                    {
                        id: 2,
                        name: 'Pro',
                        price: "37, 800 ETB",
                        features: [
                            'Customizable CMS features like user roles, content scheduling, and custom post types.',
                            'Up to 20 dynamic pages with custom design elements.',
                            'E-commerce integration with secure payment gateway options.',
                            'User registration and login functionalities.',
                            'Advanced form builder with conditional logic and data validation.',
                            'Free Updates for upto 2 months',
                        ],
                        main: true
                    },
                    {
                        id: 3,
                        name: 'Enterprise',
                        price: "55, 000 ETB",
                        features: [
                            'Enterprise-grade CMS platform with robust security features and scalability options.',
                            'Custom website development tailored to specific business requirements.',
                            'Advanced SEO optimization with ongoing monitoring and adjustments.',
                            'Integration with marketing automation tools and analytics dashboards.',
                            'Dedicated account manager for ongoing support and maintenance.',
                            'Free Updates for upto 3 months',
                        ],
                        main: false
                    }
                ]
            }
        ]
    }
]

export default packages