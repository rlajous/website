# Personal Portfolio

Welcome to the repository for my personal portfolio website. This portfolio showcases my skills, projects, and professional journey.

## Technologies Used

This project is built using a powerful stack of technologies for web development:

- [**Next.js**](https://nextjs.org/): A React framework for production.
- [**TypeScript**](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for creating custom designs.
- [**Deno**](https://deno.land/): A modern runtime for JavaScript and TypeScript, used for serverless functions.
- [**Resend**](https://resend.com/): A modern email API for sending transactional emails.

## Features

- **Portfolio Showcase**: A curated selection of my projects and contributions, highlighting my skills in web development, design, and other areas of expertise.
- **Contact Form**: An easy way for visitors to leave messages or inquiries, directly integrated into my email using Resend.
- **Automated Email Notifications**: Automated responses to contact form submissions using Resend, ensuring that every message is acknowledged and I'm promptly notified.

## Recent Enhancements

- **Improved User Interaction**: Immediate feedback to users upon submitting the contact form, enhancing the overall user experience.
- **Upgraded Email Functionality**: Implemented Resend for more reliable and efficient email handling.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rlajous/website.git
   cd website
   ```

2. Set up the correct Node.js version:
   If you have nvm (Node Version Manager) installed, run:

   ```bash
   nvm use
   ```

   If you don't have nvm, make sure you're using the Node.js version specified in the .nvmrc file.

3. Copy the environment template:

   ```bash
   cp .env.template .env.local
   ```

4. Update the variables in `.env.local` with your own configuration. You'll need to sign up for a Resend account to get an API key.

5. Install dependencies:

   ```bash
   npm install
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

The site should now be running on http://localhost:3000

## Deployment

This site is configured for deployment on [Vercel](https://vercel.com/), leveraging its seamless integration with GitHub for CI/CD. To deploy your version:

1. Fork this repository.
2. Connect your fork to Vercel.
3. Set up environment variables (including your Resend API key) in Vercel's project settings.

## Contributing

Feedback and contributions are always welcome! Please open an issue or submit a pull request with suggestions, questions, or enhancements.

## License

This project is open-source and available under the [MIT License](LICENSE)
