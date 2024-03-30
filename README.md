# Personal Portfolio

Welcome to the repository for my personal portfolio website. This portfolio showcases my skills, projects, and professional journey.

## Technologies Used

This project is built using a powerful stack of technologies for web development:

- [**Next.js**](https://nextjs.org/): A React framework for production.
- [**TypeScript**](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for creating custom designs.
- [**Supabase**](https://supabase.io/): An open-source Firebase alternative providing backend services.
- [**Deno**](https://deno.land/): A modern runtime for JavaScript and TypeScript, used for serverless functions.

## Features

- **Portfolio Showcase**: A curated selection of my projects and contributions, highlighting my skills in web development, design, and other areas of expertise.
- **Contact Form**: This is an easy way for visitors to leave messages or inquiries, directly integrated into my email.
- **Automated Email Notifications**: Automated responses to contact form submissions, ensuring that every message is acknowledged and I'm promptly notified.

## Recent Enhancements

- **Deno-based Email Automation**: Integration with Deno runtime and Supabase Edge Functions for server-side logic handling email notifications.
- **Secure Environment Variable Management**: Utilizes Supabase for securely managing and accessing API keys and sensitive information required for email automation.
- **Improved User Interaction**: Immediate feedback to users upon submitting the contact form, enhancing the overall user experience.

## Getting Started

To run this project locally:

1. Ensure you have [Node.js](https://nodejs.org/) installed.\n2. Clone the repository:
   ```bash
    git clone https://github.com/rlajous/website.git
    cd website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The site should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

This site is configured for deployment on [Vercel](https://vercel.com/), leveraging its seamless integration with GitHub for CI/CD. To deploy your version:

1. Fork this repository.
2. Connect your fork to Vercel.
3. Set up environment variables as needed in Vercel's project settings.

## Contributing

Feedback and contributions are always welcome! Please open an issue or submit a pull request with suggestions, questions, or enhancements.

## License

This project is open-source and available under the [MIT License](LICENSE).
